import Head from "next/head";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";

const Manifest = () => {
  return (
    <>
      <Head>
        <title>Ō-Inari</title>
        <meta name="description" content="Welcome to the Den" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Roadmap />
      <Team />
    </>
  );
};

export default Manifest;
