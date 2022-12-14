import styled from "styled-components";
import Image from "next/image";
import logo from "../public/Logo.png";

const Container = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;

  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  background: gold;

  border-radius: 50%;
  border: 2px solid black;

  @media (max-width: 64em) {
    width: 40%;
  }
`;

const AboutImage = () => {
  return (
    <Container>
      <Image src={logo} alt="Logo" priority />
    </Container>
  );
};

export default AboutImage;
