import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import oInariV2 from "./OInariV2.json";
import img5 from "../public/Showcase5.png";
import img1 from "../public/Logo.png";

import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { motion } from "framer-motion";
import { Button, Input, Flex } from "@chakra-ui/react";

import { useChainId, ChainId, useAddress, useTotalCirculatingSupply } from "@thirdweb-dev/react";

const oInariV2Address = "0x9D90aCC426770491F684f87Cb72ed2162255f7B2";

const Section = styled.section`
  height: 135vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #ff4f00;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding-bottom: 2.5rem;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box2 = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 38%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  @media (max-width: 70em) {
    width: 40%;
    height: 70%;
  }

  @media (max-width: 64em) {
    width: 50%;
    height: 70%;
  }

  @media (max-width: 48em) {
    width: 70%;
    height: 70%;
  }

  @media (max-width: 30em) {
    width: 120vw;
    height: 30vh;
  }

  img {
    width: 55vw;
    border-radius: 10%;
  }
`;

const ImageContainer2 = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  @media (max-width: 70em) {
    width: 17%;
  }

  @media (max-width: 64em) {
    width: 17%;
  }

  @media (max-width: 48em) {
    width: 20%;
  }

  img {
    width: 45vw;
    border-radius: 10%;
  }
`;

const Title = styled.p`
  font-size: 2.4em;
  color: #ffffff;
  text-align: center;
  margin: 0;
  padding-top: 1.5rem;
  text-shadow: 2px 1px 1px #000000;
`;

const SubText = styled.p`
  color: gold;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.3em;
  text-shadow: 2px 1px 1px #000;
`;

const SubText2 = styled.p`
  color: white;
  text-align: center;
  margin: 0;
  font-size: 1.3em;
  text-shadow: 2px 1px 1px #000;
`;


const Mint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const currentChain = useChainId();

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        oInariV2Address,
        oInariV2.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        });
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const Animate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.75, delay: 1, duration: 4 },
    },
  };


  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

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
          <Container>
            {currentChain === ChainId.Rinkeby ? (
             
              <Box>
                <Title> Mint Your Fox Here</Title>
                <SubText>
                  You may get one thats not quite like the others...
                </SubText>

                <Box2>
                  <ImageContainer2>
                    <Image src={img1} alt="Sly Fox" />
                  </ImageContainer2>

                  <ImageContainer>
                    <Image src={img5} alt="/" />
                  </ImageContainer>

                  <ImageContainer2>
                    <Image src={img1} alt="Sly Fox" />
                  </ImageContainer2>
                </Box2>
                <SubText2> Total Minted:</SubText2>
                <SubText2>  / 3333</SubText2>
                <br />
                <Flex align="center" justify="center">
                    <Button
                      borderRadius="5px"
                      cursor="pointer"
                      padding="15px"
                      marginTop="10px"
                      className="btn2"
                      onClick={handleDecrement}
                    >
                      -
                    </Button>

                    <Input
                      readOnly
                      width="50px"
                      height="60px"
                      textAlign="center"
                      paddingLeft="10px"
                      marginTop="10px"
                      type="number"
                      value={mintAmount}
                    />
                    <Button
                      borderRadius="5px"
                      cursor="pointer"
                      padding="15px"
                      marginTop="10px"
                      className="btn2"
                      onClick={handleIncrement}
                    >
                      +
                    </Button>
                  </Flex>
                  <br />
                <button className="btn2" onClick={handleMint}>
                  Mint
                </button>

              </Box>
            ) : (
              <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={Animate}
              >
                <Title>Mint Coming Soon</Title>
              </motion.div>
            )}
          </Container>
        </Section>
      </motion.div>
    </>
  );
};

export default Mint;
