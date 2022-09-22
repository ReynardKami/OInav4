import Head from "next/head";
import AboutImage from "../components/AboutImage";
import Lore from "../components/Lore";
import styled from "styled-components";
import { motion } from "framer-motion";
import Gallery from "../components/Gallery";

const Section = styled.section`
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #0052e0;
  padding-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 100%;
    padding-top: 5%;
  }

  @media (max-width: 64em) {
    width: 100%;
    padding-top: 5%;
    flex-direction: column;

    & > *:last-child {
      width: 100%;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 45vh;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-size: 1.8em;
  }
`;

const SubText = styled.p`
  width: 80%;
  color: goldenrod;
  align-self: flex-start;
  text-align: center;
  line-height: 2.3rem;
  margin: 1rem auto;
  font-weight: 400;
  font-size: 1.3em;
  text-shadow: 2px 1px 1px #000000;
  transition: all 0.3s ease-in-out;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }

  @media (max-width: 48em) {
    width: 70vw;
    text-align: center;
    padding-bottom: 3rem;
  }

  @media (max-width: 40em) {
    width: 70vw;
    line-height: 2rem;
    text-align: center;
    font-size: 1.3em;
  }
`;

const SubTextLight = styled.h2`
  color: #ffffff;
  align-self: center;
  text-align: center;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  text-shadow: 1px 1px 3px #000000;
  text-decoration-line: underline;
  transition: all 0.3s ease-in-out;

  padding-top: 2rem;

  @media (max-width: 64em) {
    width: 50%;
    text-align: center;
  }

  @media (max-width: 48em) {
    width: 48vw;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 50vw;
    text-align: center;
    font-size: 1.2em;
  }
`;

const About = () => {
  return (
    <div>
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
          <Container>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 2.5,
                  type: "spring",
                  bounce: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.1}}
            >
              <Box>
                <Title>3333 Unique Familiars</Title>
                <SubText>
                  Ō-Inari is a collection of 3333 Unique Fox Familiar NFTs
                  meticulously designed, randomly generated, and stored safely
                  forever on decentralized storage. Each Fox Familiar is
                  currently searching for a Human owner to create a bond with.
                  They are your key to future Creations, Community Access, Grand
                  Offerings, Ownership and much more to come.
                </SubText>
              </Box>
            </motion.div>
            <motion.div
              initial={{
                x: 200,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.9,
                  duration: 2.9,
                  bounce: 0.4,
                  type: "spring",
                  once: true,
                },
              }}
              viewport={{ once: true, amount: 0.2}}

            >
              <Box>
                <AboutImage />
                <SubTextLight>
                  Each unique NFT mint gives access to future blessings courtesy
                  of Ō-Inari.
                </SubTextLight>
              </Box>
            </motion.div>
          </Container>
        </Section>
        <Lore />
        <Gallery />
      </motion.div>
    </div>
  );
};

export default About;
