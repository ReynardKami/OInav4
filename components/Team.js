import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import img2 from "../public/artist.png";
import img3 from "../public/dev.png";
import img4 from "../public/marketing.png";
import Twitter from "../tags/TwitterTeams";
import Instagram from "../tags/Instagram";
import Link from "next/link";

const Section = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 5rem;
  padding-bottom: 5rem;

  background: linear-gradient(rgba(0, 183, 94, 1), transparent);
  background-color: #000;
`;

const Title = styled.h1`
  width: 45%;
  font-size: 2.5em;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  font-family: "audiowide";
  color: floralwhite;
  text-transform: capitalize;
  text-shadow: 2px 2px 2px black;

  text-decoration-line: overline;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1rem;
  padding-top: 3rem;
`;

const MemberContainer = styled.div`
  width: 80vw;

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  width: 35vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  border-radius: 25px;

  box-shadow: 5px 7px 15px rgba(0, 0, 0, 0.75);

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }

  @media (max-width: 48em) {
    width: 60vw;
  }

  img {
    border-radius: 20px;

    transition: all 0.3s ease;
  }
`;

const Name = styled.h1`
  font-size: 1.5em;
  font-family: "audiowide";
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-shadow: 3px 1px 3px white;

  color: black;
  margin-top: 1rem;
  padding-bottom: 1%;
`;

const Role = styled.h1`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  padding-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;
  text-shadow: 1px 1px 1px black;
  color: orangered;

  
`;

const Description = styled.h1`
  font-size: 1.2em;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-transform: capitalize;
  color: floralwhite;
  text-shadow: 1px 1px 1px black;
  transition: all 0.3s ease-in-out;

  padding-bottom: 0.5rem;

`;

const Quote = styled.h1`
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: gold;
  text-shadow: 1px 1px 1px black;

  padding-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;

 
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  transition: all 0.3s ease-in-out;
`;

const SocialTags = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  transition: all 0.3s ease-in-out;
  padding: 0.3rem;

  :hover {
    transform: scale(1.3);
  }
`;

const MemberComponent = ({
  name = " ",
  position = " ",
  description = " ",
  quote = " ",
}) => {
  return (
    <div>
      <Name>{name}</Name>
      <Role>{position}</Role>
      <Description>{description}</Description>
      <Quote>{quote}</Quote>
    </div>
  );
};

const Team = () => {
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
        <Title>Team</Title>
        <Container>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              delay: 0.7,
              duration: 2.5,
            }}
          >
            <MemberContainer>
              <ImageContainer>
                <Image src={img2} alt="/" />
              </ImageContainer>
              <MemberComponent
                name="Kyy"
                position="Founder/Artist"
                description="Determined leader, Father, And all the time artist. Kyy has a passion to create so much more and a Vision To Bring Quality To Ō-Inari."
                quote="'Life is art, even the chaos.'"
              />
              <Tags>
                <Link href={"https://twitter.com/Kyy_Kami"} passHref>
                  <SocialTags target={"_blank"}>
                    <Twitter />
                  </SocialTags>
                </Link>
                <Link href={"https://www.instagram.com/kyycreatives/"} passHref>
                  <SocialTags target={"_blank"}>
                    <Instagram />
                  </SocialTags>
                </Link>
              </Tags>
            </MemberContainer>
          </motion.div>
        </Container>
        <Container>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              delay: 0.7,
              duration: 2.5,
            }}
          >
            <MemberContainer>
              <ImageContainer>
                <Image src={img3} alt="/" />
              </ImageContainer>
              <MemberComponent
                name="Uncle Red"
                position="Web3 Developer/Tech"
                description="New to Web3 but not to a challenge. 'Divine Expansion' is his goal."
                quote="'I'm not here for the games..'"
              />
              <Link href={"https://twitter.com/O_InariNFT"} passHref>
                <SocialTags target={"_blank"}>
                  <Twitter />
                </SocialTags>
              </Link>
            </MemberContainer>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              bounce: 0.3,
              delay: 0.7,
              duration: 2.5,
            }}
          >
            <MemberContainer>
              <ImageContainer>
                <Image src={img4} alt="/" />
              </ImageContainer>
              <MemberComponent
                name="Jasmine"
                position="Community Manager"
                description="Avid traveler of the multiverse. An Everyday Web3 addict and foodie."
                quote="Jasmines quote here"
              />
              <Link href={"https://twitter.com/jasmine_uche"} passHref>
                <SocialTags target={"_blank"}>
                  <Twitter />
                </SocialTags>
              </Link>
            </MemberContainer>
          </motion.div>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Team;
