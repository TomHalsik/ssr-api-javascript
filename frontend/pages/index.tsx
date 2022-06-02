/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
import React from "react";

import Link from "next/link";
import { InferGetServerSidePropsType } from "next";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../lib/redux/store";
import { store } from "../lib/redux/store";

function getMe() {
  axios
    .get("http://backend:4444/api/auth/me")
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getServerSideProps() {
  let state = store.getState();
  console.log("PROPS", state);
  //getMe();
  return {
    props: {
      user: state.userStore,
    },
  };
}

function Index(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  let user = useSelector((state: RootState) => state.userStore.value);
  console.log("USER", user);
  return <div>HOME</div>;
}
export default Index;
