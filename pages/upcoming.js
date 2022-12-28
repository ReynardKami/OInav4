import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";

const Section = styled.section`
  height: 78vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  opacity: 0.7;
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  transition: all ease-in-out 0.3s;

  justify-content: center;
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 78% 100%, 0% 100%, 20% 0%);

  &:hover {
    opacity: 1;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
    transform: scale(1.05);
  }
`;

const Mint = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>Ō-Inari</title>
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
          {showModal ? (
            <div className="box">
              <p>
                Sly Foxes are soon to be released NFTs for staking and surprises
                &#x1F609;
              </p>
              <button onClick={() => setShowModal(false)}><text>Close</text></button>
            </div>
          ) : null}
          <Container onClick={() => setShowModal(true)}>
            <Image src={"/777.png"} 
            width={500}
            height={500}
            alt="Sly Fox" 
            objectFit="cover" />
          </Container>
          <Container className="test">
            <text>Coming Soon</text>
          </Container>
          <Container className="test">
            <text>Coming Soon</text>
          </Container>
        </Section>
      </motion.div>
    </>
  );
};

export default Mint;
