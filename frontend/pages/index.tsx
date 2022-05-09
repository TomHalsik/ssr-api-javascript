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
import { notify } from "../components/Notifier";
import Tabs from "../components/Utils/Tabs";

export async function getServerSideProps() {
  let test;
  fetch("http://localhost:4444/api/test")
    .then((response) => response.json())
    .then((json) => (test = json))
    .catch((err) => console.log("Request Failed", err));
  console.log("test", test);

  return {
    props: {
      number: "oooh",
    },
  };
}

function Index(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
                  src="http://localhost:4444/images/hero.jpg"
                  alt="Homepage"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Random Number === f
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  You are welcome to use it as a template for web apps using
                  NextJS - NestJS stacks
                </Typography>
                <button
                  type="button"
                  onClick={() => {
                    notify("Hello");
                  }}
                >
                  Click
                </button>
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

        <Tabs>
          <div title="about">
            <h3>About me</h3>
            <p>
              I'm Mamadou Aliou Diallo a.k.a alioukahere. A Web Developer
              (Python, PHP, JS, ...Web), Technical Writer, Passionate about
              entrepreneurship, writing and teaching code. Currently working on
              Kaherecode (
              <a href="https://www.kaherecode.com">kaherecode.com</a>
              ), an aspiring community for french developers, a web platform to
              learn and share about programming.
            </p>
          </div>
          <div title="experiences">
            <h3>My experiences</h3>
            <ul>
              <li>
                <strong>
                  Web Full Stack Developer - Kewel (2019 - Present)
                </strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  porta, libero nec maximus varius, sapien lorem aliquet ex,
                  quis faucibus odio lorem in quam.
                </p>
              </li>
              <li>
                <strong>
                  Web Full Stack Developer - Qualshore (2017 - 2019)
                </strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  porta, libero nec maximus varius, sapien lorem aliquet ex,
                  quis faucibus odio lorem in quam.
                </p>
              </li>
            </ul>
          </div>
          <div title="contact">
            <h3>Get in touch</h3>
            <p>
              <strong>Mail</strong>:{" "}
              <a href="mailto:aliou.diallo@kaherecode.com">
                aliou.diallo@kaherecode.com
              </a>{" "}
              <br />
              <strong>Adress</strong>:Dakar, Senegal
            </p>
          </div>
        </Tabs>
      </Grid>
    </div>
  );
}
export default Index;
