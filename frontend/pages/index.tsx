/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
  return (
    <div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        <Grid item>
          <Card>
            <CardActionArea>
              <CardMedia>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src="images/stickyNote.jpg"
                  alt="Homepage"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Random Number === {props.user.email}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  You are welcome to use it as a template for web apps using
                  NextJS - NestJS stacks
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="secondary">
                Github Repo
              </Button>
              <Button size="small" color="secondary">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default Index;
