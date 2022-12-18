import React from "react";
import Image from "next/image";
import styled from "styled-components";
import foxBg from "../public/Fire Fox.png"
import { useParallax } from "react-scroll-parallax";


const Section = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  overflow: hidden;
  
`;

const Background = styled.div`
opacity: 0.7;
`

const Lore = () => {

  return <Section >
  
  <h1>Lore</h1>
  <Background>
  <Image src={foxBg} alt="Fox" objectFit="cover"/>
  </Background>
  </Section>;
};

export default Lore;
