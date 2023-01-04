import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import img1 from "../public/Oinari Coin Left.png";
import img2 from "../public/3199.png";
import img3 from "../public/Oinari Coin Right.png";

import img4 from "../public/620.png";

const Section = styled.section`
  min-height: 73vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  height: calc(100% - 60px);
  width: calc(100% - 220px);
  object-fit: cover;
  border-radius: 40px 0px 40px 0px;

  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
  }
`;

const BoxFirst = styled.div`
  display: flex;
  width: 100%;
  padding: 1px;
  border: 2px solid black;
  border-radius: 32px 0px 0px 0px;
  margin: 0px 3px;

  object-fit: cover;

  img {
    object-fit: cover;
    border-radius: 30px 0px 0px 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 25%;
  }
`;

const BoxMiddle = styled.div`
  display: flex;
  width: 100%;
  padding: 1px;
  object-fit: cover;
  border: 2px solid black;
  margin: 0px 3px;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 25%;
  }
`;

const BoxLast = styled.div`
  display: flex;
  width: 100%;
  padding: 1px;
  object-fit: cover;
  border: 2px solid black;
  border-radius: 0px 0px 32px 0px;

  margin: 0px 3px;

  img {
    object-fit: cover;
    border-radius: 0px 0px 30px 0px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 25%;
  }
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
          <Container>
            <BoxFirst>
              <Image src={img1} alt="Coin" priority={true} />
            </BoxFirst>
            <BoxMiddle>
              <Image src={img2} alt="Fox" priority={true} />
            </BoxMiddle>
            <BoxMiddle>
              <Image src={img3} alt="Coin" priority={true} />
            </BoxMiddle>
            <BoxLast>
              <Image src={img4} alt="Fox" priority={true} />
            </BoxLast>
          </Container>
        </Section>
      </motion.div>
    </div>
  );
}
