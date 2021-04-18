import Head from "next/head";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
    </div>
  );
}
