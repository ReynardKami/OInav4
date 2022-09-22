import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import img1 from "../public/Logo.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 8rem;
  background-attachment: fixed;
  overflow-x: hidden;

  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #333;
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 2.5em;
  width: 100%;
  color: #ffffff;
  align-self: center;
  text-align: center;
  margin: 0 auto;
  text-shadow: 3px 4px 2px #000000;
  padding-top: 5rem;
  text-decoration-line: overline;
  transition: all 0.3s ease-in-out;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 48em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 100%;
    text-align: center;
  }
`;


const ImageContainer = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  padding-bottom: 9rem;
  justify-content: center;
  border-radius: 25px;

  transition: all 0.3s ease-in-out;

  @media (max-width: 64em) {
    width: 60vw;
  }


  @media (max-width: 48em) {
    width: 70vw;
  }

  @media (max-width: 40em) {
    width: 90vw;
  }

  img {
    border-radius: 22px;

    transition: all 0.3s ease;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Ō-Inari</title>
        <meta name="description" content="Welcome to the Den" />
        <link rel="icon" href="/favicon.ico" />
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
        <ImageContainer>
          <Image src={img1} alt= "Sly Fox" />
        </ImageContainer>
          {/* <Title>Join The Den</Title> */}
        </Section>
      </motion.div>
    </>
  );
}
