import { Wrapper } from "../components/Wrapper";

const isServer = typeof window === "undefined";

export default function Home() {
  return <Wrapper condition={!isServer}></Wrapper>;
}
