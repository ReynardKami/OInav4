import Head from "next/head";
import React, { useRef } from "react";
import styled from "styled-components";
import Accordion from "../components/Accordion";
import Image from "next/image";
import Bg from "../public/Bg.png";

const Section = styled.section`
  height: 100%;
  width: 100%;

  position: relative;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;


  background: radial-gradient(rgba(255, 255, 255, 1), transparent);
  background-color: black;


  img {
    opacity: 0.3;
    position: absolute;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  transition: all 0.2s ease-in-out;

  font-weight: 300;
  margin: 30px 15px;
`;

const Container = styled.div`
  width: 90%;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  display: flex;
  align-content: flex-start;
  transition: all ease-in-out 0.3s;

  z-index: 1;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 97%;
`;

const FAQ = () => {
  const ref = useRef(null);

  return (
    <>
      <Head>
        <title>Ō-Inari</title>
        <meta name="description" content="Welcome to the Den" />
        <link rel="icon" href="/Ō-Inari.ico" />
      </Head>
      <div>
        <Section ref={ref}>
          <Title>FAQ</Title>
          <Container>
            <Box>
              <Accordion title="What is Ō-Inari all about?">
                Patron of Prosperity, Harvests, Tea, and Tech. Ō-Inari is
                setting up for multiverse operability with the Cryptoverse, IRL,
                and Metaverse. We're going to create a platform for a community
                to give everyone a quality assurance in their investments. IRL
                and crypto resources that have continual and growing value, ...
                DAO NFT's, IRL Events/Assests, Exclusive Wear/Gear, and much
                much more!
              </Accordion>
              <Accordion title="What will be the Coin's utility?">
                The token will be used for staking, voting, and some exclusive drops.
              </Accordion>
              <Accordion title="Will there be taxes on the coin and how much?">
                7% Tax Break Down: <br />
                1. 3% Rewards: Dividend tax will be distributed from all
                transactions every 72 hours in BUSD. <br />
                2. 2% Marketing: Marketing tax to allow Ō-Inari to reinvest and
                grow the project and maximize potential.
                <br />
                3. 1% Liqudity: Liquidity tax to help prevent major price
                fluctuation after large trades by entering the liquidity pool.
                <br />
                4. 1% Team: Team tax to compensate the team for their hard work
                and keep them focused and dedicated to the platform with little
                distraction.
              </Accordion>
              <Accordion title="Why are payouts in BUSD and not Ō-Inari's token?">
                With payouts in O-Inari Token there is a possibility of price
                fluctuations. Compared to BUSD, this will minimizes the risk of
                your investments. A hefty investment will pay over time.
              </Accordion>
              <Accordion title="Who are the Foxes showcased on the site?">
                Those are Sly Foxes. Once all the Sly Foxes find their new home,
                some special events are going to take place.
              </Accordion>
              <Accordion title="When can we expect future developments with Ō-Inari?">
                Very soon, Ō-Inari is set to release more in Q1 2023 starting
                with our NFTs for boosted staking.
              </Accordion>
            </Box>
          </Container>
          <Image src={Bg} alt="Background" layout="fill" objectFit="cover" />
        </Section>
      </div>
    </>
  );
};

export default FAQ;
