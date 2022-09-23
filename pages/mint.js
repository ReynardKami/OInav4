import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #ff4f00;

  display: flex;
  text-align: center;
  justify-content: center;
  position: sticky;
`;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  @media (max-width: 70em) {
    width: 90%;
  }

  @media (max-width: 64em) {
    width: 90%;
  }
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
  padding-bottom: 5%;
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

const Mint = () => {
  return (
    <div>
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
          <Container>
            <Title>Mint Coming Soon</Title>
          </Container>
        </Section>
      </motion.div>
    </div>
  );
};

export default Mint;
