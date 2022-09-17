import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";


const Section = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #000;
  padding-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 2.5em;
  width: 100%;
  color: #ffffff;
  align-self: center;
  text-align: center;
  margin: 0 auto;
  text-shadow: 3px 4px 2px #000000;
  padding-bottom: 5%;
  text-decoration-line: overline;
  transition: all 0.3s ease-in-out;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 48em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 100%;
    text-align: center;
    font-size: 1.8em;
  }
`;

const Gallery = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.25,
        duration: 0.75,
      }}
    >
      <Section>
        <Container>
          <Title>Gallery Coming Soon</Title>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Gallery;
