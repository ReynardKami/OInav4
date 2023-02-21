import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 73vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ō-Inari | Home</title>
        <meta name="description" content="Welcome to the Den" />
        <link rel="icon" href="/Ō-Inari.ico" />
      </Head>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.45,
          duration: 0.75,
        }}
      >
        <Section>
          {" "}
          <h1> Still In Development</h1>
        </Section>
      </motion.div>
    </div>
  );
}
