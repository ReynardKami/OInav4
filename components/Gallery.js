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
`;

const Container = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;


  display: flex;
  justify-content: center;
  align-items: center;
`;

const SingleContainer = styled.div`
  width: 100%;
  padding: 0.4rem;
  overflow: hidden;

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

const ImageContainer = styled.div`
  width: 27vw;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid white;
  border-radius: 25px;

  transition: all 0.3s ease-in-out;

  img {
    border-radius: 22px;

    transition: all 0.3s ease;
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
        <Title>Sly Foxes</Title>
        <Container>
          <SingleContainer>
            <ImageContainer>
              <Image src={img1} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
          <SingleContainer>
            <ImageContainer>
              <Image src={img2} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
          <SingleContainer>
            <ImageContainer>
              <Image src={img3} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
        </Container>
        <Container>
          <SingleContainer>
            <ImageContainer>
              <Image src={img4} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
          <SingleContainer>
            <ImageContainer>
              <Image src={img5} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
          <SingleContainer>
            <ImageContainer>
              <Image src={img6} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
        </Container>
        <Container>
          <SingleContainer>
            <ImageContainer>
              <Image src={img7} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
          <SingleContainer>
            <ImageContainer>
              <Image src={img8} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
          <SingleContainer>
            <ImageContainer>
              <Image src={img9} alt="Kitsune" />
            </ImageContainer>{" "}
          </SingleContainer>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Gallery;
