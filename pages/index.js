import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <Head>
        <title>Creating Next Theme App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />

      <div className="flex ml-4 mt-5 gap-x-5">
        <button
          className="p-2 sm:pd-3 md:pd-5 rounded-2xl shadow-lg ring-2 ring-gray-200 focus:outline-none 
        focus:ring-purple-400 "
        >
          Create
        </button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 sm:pd-3 md:pd-5 rounded-2xl shadow-lg ring-2 ring-gray-200 focus:outline-none 
        focus:ring-green-400 "
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}
