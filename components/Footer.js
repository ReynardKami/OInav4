import Link from "next/link";
import styled from "styled-components";


const FooterSection = styled.div`
  color: black;
  width: 100%;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledLink = styled.a`
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #1da1f2;
    filter: drop-shadow(0 0 3rem);
    transition: 0.2s linear;
  }
`;

const Footer = () => {
  return (
    <div>
      <FooterSection>
        <ul>
          <li>
            <Link
              href="https://twitter.com/O_InariNFT"
              passHref
              className="footlink"
            >
              <StyledLink target="_blank">Twitter </StyledLink>
            </Link>
          </li>
          <li>
            <Link href="" passHref className="footlink">
              <StyledLink target="_blank">Telegram</StyledLink>
            </Link>
          </li>
          <li>
            <Link href="https://discord.com" passHref className="footlink">
              <StyledLink target="_blank">Discord</StyledLink>
            </Link>
          </li>
          <ol>&copy;Ō-Inari. 2022 </ol>
        </ul>
      </FooterSection>
    </div>
  );
};

export default Footer;
