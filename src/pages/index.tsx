import { InferGetServerSidePropsType } from "next";
import { AppController } from "../server/app/app.controller";
import { Backend } from "../server/main";
import Navigationbar from "../client/components/Navbar";

export async function getServerSideProps() {
  const app = await Backend.getApp();

  const controller = app.get(AppController);
  
  return {
    props: {
      randomNumber: controller.randomNumber()
    }
  }
}

export default function GsspExample(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Navigationbar />
      Random Number === {props.randomNumber}
    </div>
  )
}
