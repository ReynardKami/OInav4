import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 75vh;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const staking = () => {
  return (
    <Section>
      <div>
        <p>this will be where the staking takes place</p>
      </div>
    </Section>
  );
};

export default staking;
