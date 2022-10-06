import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import img1 from "../public/Showcase1.png";
import img2 from "../public/Showcase2.png";
import img3 from "../public/Showcase3.png";
import img4 from "../public/Showcase4.png";
import img5 from "../public/Showcase5.png";
import img6 from "../public/Showcase6.png";
import img7 from "../public/Showcase7.png";
import img8 from "../public/Showcase8.png";
import img9 from "../public/Showcase9.png";

const Section = styled.section`
  height: auto;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  background-color: #000;
  padding-top: 9rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  padding-top: 1rem;

  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SingleContainer = styled.div`
  width: 30vw;
  padding: 0.5rem;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 64em) {
    width: 40vw;
  }

  @media (max-width: 48em) {
    width: 45vw;
  }

  @media (max-width: 40em) {
    width: 80vw;
  }

  img {
    border-radius: 10px;
  }
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
  padding-bottom: 4rem;
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
    <div>
      <Section>
        <Title>Sly Foxes</Title>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.7,
            delay: 1,
            duration: 2.5,
          }}
        >
          <Container>
            <SingleContainer>
              <Image src={img1} alt="Kitsune" />
            </SingleContainer>
            <SingleContainer>
              <Image src={img2} alt="Kitsune" />
            </SingleContainer>
            <SingleContainer>
              <Image src={img3} alt="Kitsune" />
            </SingleContainer>
          </Container>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.7,
            delay: 1.3,
            duration: 2.5,
          }}
        >
          <Container>
            <SingleContainer>
              <Image src={img4} alt="Kitsune" />
            </SingleContainer>
            <SingleContainer>
              <Image src={img5} alt="Kitsune" />
            </SingleContainer>
            <SingleContainer>
              <Image src={img6} alt="Kitsune" />
            </SingleContainer>
          </Container>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.7,
            delay: 1,
            duration: 2.5,
          }}
        >
          <Container>
            <SingleContainer>
              <Image src={img7} alt="Kitsune" />
            </SingleContainer>
            <SingleContainer>
              <Image src={img8} alt="Kitsune" />
            </SingleContainer>
            <SingleContainer>
              <Image src={img9} alt="Kitsune" />
            </SingleContainer>
          </Container>
        </motion.div>
      </Section>
    </div>
  );
};

export default Gallery;
