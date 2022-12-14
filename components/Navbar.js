import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import styled from "styled-components";

const StyledLink = styled.a``;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={"navbar"}>
      <Link href="/" passHref>
        <StyledLink>
          <Logo> Ō-Inari </Logo>
        </StyledLink>
      </Link>
      <ul className={isOpen === false ? "navmenu" : "navmenu" + " " + "active"}>
        <li className={"item"}>
          <Link href="/about" passHref>
            <StyledLink onClick={closeMenu}>About</StyledLink>
          </Link>
        </li>
        <li className={"item"}>
          <Link href="/manifesto" passHref>
            <StyledLink onClick={closeMenu}>Manifesto</StyledLink>
          </Link>
        </li>
        <li className={"item"}>
          <Link href="/upcoming" passHref>
            <StyledLink>Upcoming</StyledLink>
          </Link>
        </li>
        <li className={"item"}>
          <Link href="/faq" passHref>
            <StyledLink onClick={closeMenu}>FAQ</StyledLink>
          </Link>
        </li>
      </ul>

      <button
        className={
          isOpen === false ? "hamburger" : "hamburger" + " " + "active"
        }
        onClick={openMenu}
      >
        <span className={"bar"}></span>
        <span className={"bar"}></span>
        <span className={"bar"}></span>
      </button>
    </div>
  );
};

export default Navbar;
