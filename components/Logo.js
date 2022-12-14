import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HomeLogo = styled.div`
  font-size: 33px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
    transition: 0.3s ease-in-out;
  }
`;

const Logo = () => {
  return (
    <Link href="/" passhref>
      <HomeLogo>Ō-Inari</HomeLogo>
    </Link>
  );
};

export default Logo;
