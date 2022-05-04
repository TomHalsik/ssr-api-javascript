import { InferGetServerSidePropsType } from "next";
import Navigationbar from "../client/components/Navbar";

export async function getServerSideProps() {
  const response = await axios.get(`http://localhost:4444/api/test`);
    const data = await res.json()

    return {
        props: { menuItems: data },
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
