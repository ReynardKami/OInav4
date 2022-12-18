import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import AboutImage from "../components/AboutImage";
import { useParallax } from "react-scroll-parallax";

const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 5rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: white;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

const Tokenomics = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  width: 100%;
  align-self: center;
  text-align: center;
  text-decoration: 5px underline;
  margin: 25px;
  letter-spacing: 3px;

  filter: drop-shadow(1px 2px 0.2rem gold);

  transition: all 0.3s ease-in-out;
`;

const SubText = styled.p`
  width: 100%;
  text-align: center;
  line-height: 3.3rem;
  margin: 10px 20px;
  font-weight: 200;
  font-size: 1.3em;

  letter-spacing: 1px;

  transition: all 0.3s ease-in-out;
`;

const About = () => {
  const down = useParallax({
    speed: 5,
  });

  const up = useParallax({
    speed: -20,
  });

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
          <Container ref={up.ref}>
            <div>
              <Box>
                <AboutImage />
                <Title>Ō-Inari</Title>
                <SubText>
                  Ō-Inari is going to be more than just a token. We're focused
                  on building a foundation with the vision we were given. Expect
                  to see unique utilities in the near and not so far future for
                  the Cryptovere and IRL, but we won't reveal just yet
                  &#x1F609;. Stay connected for updates!
                  <div className="text">
                    "Sometimes you have to think like a &#x1F98A;"
                  </div>
                </SubText>
              </Box>
            </div>
          </Container>
          <div className="tokenomics" ref={down.ref}>
            <h1 className="tokenname">$ONR Token</h1>
            <div className="tokenbox">
              <h1>Total Supply</h1>
              <p>333,000,000</p>
            </div>
            <div className="tokenbox">
              <h1>Token Tax</h1>
              <p>Buy & Sell 7%</p>
            </div>
            <div className="tokenbox">
              <h1>Utility</h1>
              <p>• Staking</p>
              <p>• Exclusive Event Entrance</p>
              <p>• Voting Power</p>
            </div>
            <Tokenomics>
              <div className="container">
                <h1>Tokenomics Breakdown</h1>

                <div className="skills">
                  <span className="name">Presale</span>
                  <div className="percent">
                    <div className="progress1"></div>
                  </div>
                  <span className="value">35%</span>
                </div>

                <div className="skills">
                  <span className="name">Staking</span>
                  <div className="percent">
                    <div className="progress2"></div>
                  </div>
                  <span className="value">30%</span>
                </div>

                <div className="skills">
                  <span className="name">Liquidity</span>
                  <div className="percent">
                    <div className="progress3"></div>
                  </div>
                  <span className="value">25%</span>
                </div>

                <div className="skills">
                  <span className="name">Marketing</span>
                  <div className="percent">
                    <div className="progress4"></div>
                  </div>
                  <span className="value">9%</span>
                </div>

                <div className="skills">
                  <span className="name">Team</span>
                  <div className="percent">
                    <div className="progress5"></div>
                  </div>
                  <span className="value">1%</span>
                </div>
              </div>
            </Tokenomics>
          </div>
        </Section>
      </motion.div>
    </div>
  );
};

export default About;
