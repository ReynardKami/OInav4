import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Section = styled.section`
  min-height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 11rem;
  background-attachment: fixed;
  overflow: hidden;

  background: linear-gradient(rgba(0, 82, 224, 1), transparent);
  background-color: #000000;
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
  padding-bottom: 2rem;
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
  }
`;

const SubText = styled.p`
  width: 90%;
  color: gold;
  align-self: flex-start;
  text-align: center;
  margin: 1rem auto;
  font-weight: 400;
  font-size: 1.4em;
  text-shadow: 3px 3px 2px #000;
  line-height: 5rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 64em) {
    width: 90%;
    text-align: center;
    line-height: 5rem;
  }

`;

const LoreAnimate = {
  offscreen: { y: -200, opacity: 0 },
  title: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, delay: 0.3, duration: 3.3 },
  },
  text: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 2 } },
};

const Lore = () => {
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
        <motion.div
          initial={"offscreen"}
          whileInView={"title"}
          viewport={{ once: true, amount: 0.7 }}
          variants={LoreAnimate}
        >
          <Title>Lore</Title>
        </motion.div>

        <div>
          <motion.div
            initial={"offscreen"}
            whileInView={"text"}
            viewport={{ once: true }}
            variants={LoreAnimate}
          >
            <SubText>
              Ō-Inari, the patron of prosperity, harvests, and smithing. Brought
              into existence by The Everlasting Ruler. Ō-Inari, with their sly
              fox familiar at their side, governed over humans and their quest
              for abundance. Growing weary of the duty and the increasing number
              of humans, Ō-Inari handed this task to select Kami (Supernatural
              Entities) from the multiverse and assigned them a familiar. Being
              master shapeshifters the Kami took on many forms, neither being
              good nor evil but just "being". The 3333 select Kami under
              Ō-Inari's command foolishly grew drunk on power, looking down on
              humans as lowly, and neglecting their duty to assist them. The
              Everlasting Ruler in his wrath was VERY displeased. He stripped
              the Kami of their powers and scattered them across the multiverse
              to 300 years of servitude as "lowly humans". As for the familiar,
              The Everlasting Ruler was merciful enough to leave these adorable
              sly fox familiars in the hands mankind to use as they see fit, as
              humans lack the supernatural powers to greatly abuse this
              blessing. On the return of the Kami they will be bound to each
              familiar bonded with each human as a lesson from The Everlasting
              Ruler for them to know their place.
            </SubText>
          </motion.div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Lore;
