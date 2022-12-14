import React from "react";
import styled from "styled-components";
import Image from "next/image";
import img2 from "../public/artist.png";
import img3 from "../public/dev.png";
import Twitter from "../tags/TwitterTeams";
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

  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 2em;
  padding-top: 1.5rem;

  font-family: "audiowide";
  color: black;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const MemberContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80vw;

    transition: all 0.3s ease;
  }
`;

const Name = styled.h1`
  font-size: 1.1em;
  display: flex;
  margin-left: 7px;
  text-transform: uppercase;
  color: black;
`;

const Role = styled.h1`
  font-size: 1em;
  display: flex;
  margin-left: 7px;
  text-transform: capitalize;
  color: orangered;
`;

const Description = styled.h1`
  font-size: 0.8em;
  display: flex;
  margin-left: 7px;
  text-transform: capitalize;
  color: black;
`;

const Quote = styled.h1`
  font-size: 0.7em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: orangered;

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
    <div>
      <Section>
        <Title>Team</Title>
        <Container>
          <MemberContainer>
            <ImageContainer>
              <Image src={img2} alt="/" />
            </ImageContainer>
            <MemberComponent
              name="Kyy"
              position="Founder/Artist"
              description="Determined leader, Father with a passion to create so much more "
              quote="'Life is art, even the chaos.'"
            />
            <Tags>
              <Link href={"https://twitter.com/Kyy_Kami"} passHref>
                <SocialTags target={"_blank"}>
                  <Twitter />
                </SocialTags>
              </Link>
            </Tags>
          </MemberContainer>

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
        </Container>
      </Section>
    </div>
  );
};

export default Team;
