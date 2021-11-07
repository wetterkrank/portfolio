import styled from "styled-components";
import { ILink } from "../types/shared";

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: var(--nav-full-height);
  z-index: ${({ theme }) => theme.zIndices.navbar};
  display: grid;
  grid-template-columns: max-content auto;
  align-items: center;
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);

  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textInverted};

  transition: height 0.1s linear;

  a {
    color: ${({ theme }) => theme.colors.textInverted};
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
    &:focus {
      color: ${({ theme }) => theme.colors.text};
      outline: 1px dashed ${({ theme }) => theme.colors.text};
      outline-offset: 3px;
    }
    transition: all 0.1s linear;
    transition-property: color, outline, outline-offset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: relative;
    padding-left: var(--main-padding-x-sm);
    padding-right: var(--main-padding-x-sm);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    &.reduced-height {
      height: var(--nav-reduced-height);
      ${({ theme }) => theme.mixins.boxShadow};
      transition: height 0.2s linear;
    }
  }
`;

const StyledLogo = styled.nav`
  display: flex;
  font-size: 1.6em;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5em;
  }
`;

const StyledNavigation = styled.nav`
  justify-self: end;
  justify-content: end;
  display: flex;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  ul.nav-anchors {
    margin-right: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ul.nav-anchors {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    ul.nav-external {
      li:not(:last-of-type) {
        display: none;
      }
      font-size: 1.2em;
    }
  }

  li {
    float: left;
    margin-left: 24px;
    a {
      vertical-align: middle;
    }
  }
`;

export type NavbarProps = {
  navLinks: ILink[];
};

const linkList = (links: NavbarProps["navLinks"]) =>
  links.map((link) => {
    return (
      <li key={link.name} id={`nav-a-${link.name.toLowerCase()}`}>
        <a href={link.url}>{link.name}</a>
      </li>
    );
  });

export const Navbar = ({ navLinks }: NavbarProps) => {
  const anchors = navLinks.filter((link) => link.url[0] === "#");
  const external = navLinks.filter((link) => link.url[0] !== "#");
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <a href="\">Alex Antsiferov</a>
        </StyledLogo>
        <StyledNavigation>
          <ul className="nav-anchors">{linkList(anchors)}</ul>
          <ul className="nav-external">{linkList(external)}</ul>
        </StyledNavigation>
      </StyledHeader>
    </>
  );
};
