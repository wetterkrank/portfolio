import { useState } from "react";
import styled from "styled-components";
import { BurgerButton, SideMenu } from "./BurgerMenu";

const StyledHeader = styled.header`
  height: var(--nav-full-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);
`;

const StyledLogo = styled.nav`
  min-width: 200px;
  font-size: 2em;
  a {
    text-decoration: none;
  }
`;

const StyledNavigation = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    float: left;
    padding: 16px;
  }
`;

type NavbarProps = {
  navLinks: {
    name: string;
    url: string;
  }[];
};

export const Navbar = ({ navLinks }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledHeader>
      <StyledLogo>
        <a href="\">Alex Antsiferov</a>
      </StyledLogo>
      <StyledNavigation>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <SideMenu
          open={menuOpen}
          closeFn={() => setMenuOpen(false)}
          navLinks={navLinks}
        />
      </StyledNavigation>
      <BurgerButton onClick={() => setMenuOpen(true)} />
    </StyledHeader>
  );
};
