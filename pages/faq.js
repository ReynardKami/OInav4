import Head from "next/head";
import React, { useRef } from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import { motion } from "framer-motion";
import Link from "next/link";

const Section = styled.section`
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  position: relative;
  background-color: firebrick;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;

  border: 1px solid white;
  border-radius: 15px;
  box-shadow: 5px 7px 15px rgba(0, 0, 0, 0.75);

  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
  font-size: 3em;
  font-family: "audiowide";
  text-transform: uppercase;
  color: floralwhite;
  transition: all 0.2s ease-in-out;

  padding-top: 3rem;
  padding-left: 2rem;
  width: fit-content;

  @media (max-width: 64em) {
    font-size: 2.7em;
  }
  @media (max-width: 48em) {
    font-size: 2.4em;
  }
`;

const Terms = styled.h1`
  font-size: 1.3em;
  font-family: "audiowide";
  color: floralwhite;
  transition: all 0.2s ease-in-out;

  padding-right: 1rem;
  padding-left: 1rem;
`;

const Container = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  display: flex;
  align-content: flex-start;
`;

const ContainerBottom = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 80%;
`;

const FAQ = () => {
  const ref = useRef(null);

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
        <Section ref={ref}>
          <Title>FAQ</Title>
          <Container>
            <Box>
              <Accordion title="Who is Ō-Inari and what are Sly Fox Familiars?">
                Patron of prosperity, harvests, tea, and smithing, Ō-Inari has
                Fox Familiars assist with ventures across various realms and
                multiverses. These Sly Fox Familiars are now your companions
                from the multiverse.
              </Accordion>
              <Accordion title="What can I do with my Sly Fox?">
                Sly Fox owners are given unlimited, worldwide license to use,
                copy and display their purchased Fox for personal use. Carefully
                read 'TERMS AND CONDITIONS' below to understand the full
                ownership of your NFT.
              </Accordion>
              <Accordion title="Which network will the NFTs be on?">
                The best NFT Familiars to date are being hosted on the Ethereum
                network.
              </Accordion>
              <Accordion title="Where can I find the NFT after I mint?">
                The NFT(s) will be in your wallet and viewable on Opeansea. They
                will be revealed after 3 days or when the collection is sold
                out, which ever comes first. They will live on decentralized
                storage forever.
              </Accordion>
              <Accordion title="Who are the Kami mentioned in the Roadmap?">
                The Kami were the companions of the Sly Foxes prior to the
                Humans. Once the foxes are all adopted the Kami are said to make
                their appearance and join you as well.
              </Accordion>
              <Accordion title="What is in the future of Ō-Inari?">
                As stated in the roadmap, the Ultimate Goal is Divine Expansion.
                We will not make you any empty promises. We will seek to grow
                alliances with the outlook of bringing prosperity and valued
                ownership to the members (NFT Holders) of Ō-Inari.
              </Accordion>
              <Accordion title="What does all of this mean?">
                The Ō-Inari den strives for the project to grow exponentially,
                so that not only the NFT holder(s) but also others can enjoy the
                physical and digital products we create for day to day use. In
                the words of our founder and THE EVERLASTING RULER "One step at
                a time."
              </Accordion>
            </Box>
          </Container>
          <ContainerBottom>
            <Link href={"/terms"} passHref>
              <StyledLink target="_blank">
                <Terms>Terms & Conditions</Terms>
              </StyledLink>
            </Link>
          </ContainerBottom>
        </Section>
      </motion.div>
    </>
  );
};

export default FAQ;
