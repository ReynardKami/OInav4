import Link from "next/link";
import styled from "styled-components";
import Twitter from "../tags/Twitter";
import Opensea from "../tags/Opensea";
import { motion } from "framer-motion";
import truncateEthAddress from "truncate-eth-address";

const FooterSection = styled.div`
  background: black;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  color: floralwhite;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const FooterSection2 = styled.div`
  background: black;
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0.2rem;
  overflow-x: hidden;
  overflow-y: visible;
  z-index: 1;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;

const Footer = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.45,
          duration: 0.75,
        }}
      >
        <FooterSection>
          <Link href="https://twitter.com/O_InariNFT" passHref>
            <StyledLink target="_blank">
              <Twitter />
            </StyledLink>
          </Link>
          <Link href="https://opensea.io" passHref>
            <StyledLink target="_blank">
              <Opensea />
            </StyledLink>
          </Link>
        </FooterSection>
        <FooterSection2>
          <Link href="https://etherscan.io" passHref>
            <StyledLink target="_blank">
              {truncateEthAddress("0x6591b5Dc10Ac1b394406d53aa1F3B42214666301")}
            </StyledLink>
          </Link>
        </FooterSection2>

        <FooterSection>
          &copy; {new Date().getFullYear()} Inari. All Rights Reserved.
        </FooterSection>
      </motion.div>
    </div>
  );
};

export default Footer;
