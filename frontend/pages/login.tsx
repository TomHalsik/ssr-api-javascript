import React, { useState } from "react";
import Head from "next/head";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import * as classes from "../lib/styles/styles";
import API from "../lib/api/API";
import { login } from "../lib/redux/user/userStore";
import { useDispatch } from "react-redux";
import { RootState } from "../lib/redux/store";
import { useSelector } from "react-redux";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();

  const logUser = async () => {
    const user = {
      email: username,
      password,
    };
    const res = await API.post("http://127.0.0.1:4444/api/auth/login", user);

    console.log(res);
    return res;
  };

  const handleOnChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const isValid = () => {
    if (!username) {
      return false;
    }
    if (!password) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    console.log("valid");
    e.preventDefault();
    if (isValid()) {
      const user = await logUser();
      dispatch(login(user));
    } else {
      console.log("Err");
    }
  };
  return (
    <div>
      <Head>
        <title> Log In</title>
        <meta name="description" content="This is the Log In page" />
      </Head>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        style={classes.container}
      >
        <Grid item>
          <Card variant="outlined" style={classes.card}>
            <CardContent>
              <Typography align="center" variant="h6">
                Log In
              </Typography>
              <TextField
                name="username"
                label="User Name"
                margin="normal"
                value={username}
                onChange={handleOnChange}
                style={classes.textField}
              />
              <TextField
                name="password"
                label="Password"
                value={password}
                margin="normal"
                onChange={handleOnChange}
                style={classes.textField}
              />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ margin: "0 auto" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
