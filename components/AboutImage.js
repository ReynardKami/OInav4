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
  box-shadow: 5px 7px 10px black;
  border: 2px solid black;

  @media (max-width: 64em) {
    width: 40%;
  }
`;

const AboutImage = () => {
  return (
    <Container className="logo">
      <Image src={logo} alt="Logo" />
    </Container>
  );
};

export default AboutImage;
