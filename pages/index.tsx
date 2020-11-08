import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function testPost() {
      const res = await fetch(`http://localhost:3000/api/hello`, {
        method: "POST",
      });
      const data = await res.json();
      setData(data);
    }
    testPost();
  }, []);

  return (
    <div>
      <Head>
        <title>next 10 netlify test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>aww yiss much better</p>
      <p>data: {JSON.stringify(data)}</p>
    </div>
  );
}
