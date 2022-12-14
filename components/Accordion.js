import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.4rem;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 20px;

  border-radius: 25px 0px 25px 0px;
  transition: all 0.7s ease-in-out;

  background: linear-gradient(rgba(5, 5, 5, 0.7), transparent);
`;

const Title = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.5px;
  margin: 1rem 0;
  transition: all 0.2s ease-in-out;
  color: orangered;
`;

const Reveal = styled.div`
  display: ${(props) => (props.clicked ? "block" : "none")};
  margin: 5px 10px;
  font-size: 1em;
  color: orange;
  font-weight: 100;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px black;
  line-height: 2.5rem;
`;

const Name = styled.div`
  display: flex;
  color: floralwhite;
  font-size: 1.2em;
  font-weight: 200;
  padding-left: 10px;
  transition: all ease-in-out 0.2s;

  @media (max-width: 48em) {
    font-size: 1.1em;
  }
`;

const Indicator = styled.div`
  font-size: 1.3em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Accordion = ({ title, children }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? <Indicator>-</Indicator> : <Indicator>+</Indicator>}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
