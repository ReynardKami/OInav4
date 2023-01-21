import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 75vh;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const wallet = () => {
  return (
    <Section>
      <div>
        <p>this will be where the wallet stuff will happen</p>
      </div>
    </Section>
  );
};

export default wallet;
