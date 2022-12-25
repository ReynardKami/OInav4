import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import background from "../public/Manifesto.png";
import kywiky from "../public/4.png";
import tech from "../public/1063.png";
import rayzr from "../public/89.png";
import { useParallax } from "react-scroll-parallax";

const Section = styled.section`
  min-height: 78vh;
  width: auto;
  flex-direction: column;
  position: relative;
  padding: 1rem;

  overflow: hidden;
`;

const Container = styled.div`
  width: auto;
  position: static;
  overflow: hidden;

  opacity: 0.2;
`;

const TeamSection = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2.5rem;
  border: 2px solid black;
  border-radius: 25px 0px 25px 0px;
  margin: 10px 20px;
  z-index: 1000;
`;

const Manifesto = () => {
  const portal = useParallax({
    speed: 30,
  });

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
          <div className="wrapper" ref={portal.ref}>
            <div className="box1">
              <header>Phase 1</header>
              <p>• Contract Creation &#x2705;</p>
              <p>• Website Completion &#x2705;</p>
              <p>• Audit/KYC &#x2705;</p>
              <p>• Establish Social Media Presence</p>{" "}
            </div>
            <div className="box2">
              <header>Phase 2</header>
              <p>• Marketing Campaign</p>
              <p>• Pinksale Listing/Launch</p>
              <p>• Partnership Deals</p>
              <p>• Giveaways</p>
            </div>
            <div className="box3">
              {" "}
              <header>Phase 3</header>
              <p>• Marketing Campaign Ramp-Up</p>
              <p>• Launch on PancakeSwap</p>
              <p>• Reward Pool Tracker</p>
              <p>• Staking Pools</p>
              <p>• Competitions</p>
            </div>
            <div className="box4">
              {" "}
              <header>Phase 4</header>
              <p>• CMC/Coin Gecko Listing</p>
              <p>• Bigger Giveaways/Grand Prizes</p>
              <p>• Charity Donations</p>
              <p>• Token Voting</p>
              <p>• NFT Release</p>
              <p>• Future and Frequent QOL Updates</p>
            </div>
            <div className="box5">
              {" "}
              <header>Upcoming</header>
              <p>• NFT DAO & Staking Boost</p>
              <p>• Community Expansion</p>
              <p>• IRL Gear</p>
              <p>• Airdrops</p>
              <p>• DEX Wallet App</p>
              <p>• ETH Bridging</p>
              <p>• Much More Soon!! </p>
            </div>
          </div>
          <TeamSection className="description">
            <header>The Team</header>
            <div className="foxbox">
              <div className="fox">
                <Image src={kywiky} alt="fox" priority className="fox" />
              </div>
              <div className="teams">
                <p className="title">Kywiky</p>
                <p>
                  Founder, Artist, and a Dreamer with an air of imagination. "If
                  you think big you can do big!" he says. Finding that space
                  where creativity manifests.
                </p>
              </div>
            </div>
            <div className="foxbox">
              <div className="fox">
                <Image src={rayzr} alt="fox" priority={true} className="fox" />
              </div>
              <div className="teams">
                <p className="title">Rahzi</p>
                <p>
                  Marketing Expert with the work ethic to match. He has an eye
                  for success and it doesn't stop at getting the job done.
                </p>
              </div>
            </div>
            <div className="foxbox">
              <div className="fox">
                <Image src={tech} alt="fox" priority className="fox" />
              </div>
              <div className="teams">
                <p className="title">
                  01000011 01101111 01110011 01101101 01101111
                </p>
                <p>
                  Less of a person and more of an entity, they're building the
                  framework behind the scences to ensure the value and care is
                  put into the project. The more the merrier right!
                </p>
              </div>
            </div>
          </TeamSection>

          <Container>
            <Image
              src={background}
              alt="FoxBg"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </Container>
        </Section>
      </motion.div>
    </>
  );
};

export default Manifesto;
