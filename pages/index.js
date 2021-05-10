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

      <div className="flex gap-x-5">
        <button
          className="p-10 rounded-2xl shadow-lg ring-2 ring-gray-200 focus:outline-none 
        focus:ring-blue-400 "
        >
          Create
        </button>
        <button
          className="p-10 rounded-2xl shadow-lg ring-2 ring-gray-200 focus:outline-none 
        focus:ring-blue-400 "
        >
          Help
        </button>
      </div>
    </div>
  );
}
