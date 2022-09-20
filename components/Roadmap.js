import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Section = styled.section`
  min-height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 7rem;

  overflow: hidden;

  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #00b75e;
`;

const Title = styled.h1`
  font-size: xx-large;
  font-family: "audiowide";
  text-transform: capitalize;
  color: #ffffff;
  text-shadow: 3px 3px 3px #000000;
  text-decoration-line: overline;

  display: flex;
  color: floralwhite;
  justify-content: center;
  text-align: center;
  align-content: center;


  @media (max-width: 40em) {
    font-size: larger;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border-radius: 50px 0 50px 0;
    text-align: right;

    @media (max-width: 48em) {
      border-radius: 0 50px 0 50px;
      text-align: left;
      p {
        border-radius: 0 40px 0 40px;
      }
    }
  }

  p {
    border-radius: 40px 0 40px 0;
  }

  & > *:nth-of-type(2n) {
    justify-content: center;

    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 95.8%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

`;

const ItemContainer = styled.div`
  width: 50%;
  height: fit-content;
  padding: 0.5rem;
  border: 3px solid black;
  background: linear-gradient(rgba(255, 107, 24, 1), transparent);
  background-color: #993300;
  box-shadow: 7px 9px 5px rgba(0, 0, 0, 0.75);

  @media (max-width: 48em) {
    width: 90%;
  }
`;
const Box = styled.p`
  height: fit-content;
  background: linear-gradient(rgba(255, 255, 255, 1), transparent);
  background-color: #222;
  padding: 1rem;
  position: relative;
  border: 3px solid black;
`;

const SubTitle = styled.span`
  display: block;
  font-size: larger;
  text-transform: capitalize;
  text-shadow: 1px 1px 3px #fff;
  color: black;

  @media (max-width: 40em) {
    font-size: large;
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: medium;
  text-transform: capitalize;
  text-shadow: 1px 1px 1px #000;
  font-weight: 400;
  color: floralwhite;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: small;
    font-weight: 600;
  }
`;


const MapAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 10,
    opacity: 1,
    transition: { type: "spring", bounce: 0.7, delay: 1.1, duration: 4 },
  },
};

const RoadMapItem = ({ title, subtext }) => {
  return (
    <Item>
      <ItemContainer>
        <Box>
          <SubTitle> {title} </SubTitle>
          <Text> {subtext} </Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.45,
        duration: 0.75,
      }}
    >
      <Section>
        <Title>Roadmap </Title>

        <Container>
          <Items>
            <Item>&nbsp;</Item>
            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              variants={MapAnimate}
            >
              <RoadMapItem
                title="25% Collection Minted"
                subtext="We will be continuing to forge alliances with other quality Blockchain, NFT, and Metaverse projects."
              />
            </motion.div>

            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              variants={MapAnimate}
            >
              <RoadMapItem
                title="50% Collection Minted"
                subtext="To bring hope and abundance to the holders, royalties from secondary markets goes towards Community Royalties perpetually."
              />
            </motion.div>

            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              variants={MapAnimate}
            >
              <RoadMapItem
                title="75% Collection Minted"
                subtext="The Kami which were scattered across the multiverses will make thier long journey back to serve you and your sly fox."
              />
            </motion.div>
            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              variants={MapAnimate}
            >
              <RoadMapItem
                title="100% Collection Minted"
                subtext="$50,000 of ETH will be injected to a wallet for Ō-Inari dedicated to future growth."
              />
            </motion.div>
            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              variants={MapAnimate}
            >
              <RoadMapItem
                title="Future Growth"
                subtext="Our goal is 'divine expansion' as according to the will of the Everlasting Ruler. We will not make empty promises. Ō-Inari however does seek to bring more digital and physical assets to all the NFT Holders and sly fox lovers the same."
              />
            </motion.div>
            <motion.div
              initial={"offscreen"}
              animate={"onscreen"}
              variants={MapAnimate}
            >
              <RoadMapItem
                title="On Going"
                subtext="Quality of life updates will be made whereever we have a presence to benefit the NFT owners and admirers."
              />
            </motion.div>
          </Items>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Roadmap;
