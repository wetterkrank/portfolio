import styled from "styled-components";

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

  &.reduced-height {
    height: var(--nav-reduced-height);
    ${({ theme }) => theme.mixins.boxShadow};
    transition: all 0.1s linear;
  }

  transition: all 0.1s linear;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: var(--main-padding-x-sm);
    padding-right: var(--main-padding-x-sm);
  }
`;

const StyledLogo = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1.6em;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.5em;
  }
`;

const StyledNavigation = styled.nav`
  justify-self: end;
  height: 50px;
  display: flex;
  align-items: center;
  a {
    vertical-align: middle;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    float: left;
    margin-left: 24px;

    &:not(:last-of-type) {
      @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
      }
    }
    &:last-of-type {
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        font-size: 1.3em;
      }
    }
  }
`;

export type NavbarProps = {
  navLinks: {
    name: string;
    url: string;
    external?: boolean;
  }[];
};

const linkList = (links: NavbarProps["navLinks"]) =>
  links.map((link) => (
    <li key={link.name} id={`nav-a-${link.name.toLowerCase()}`}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));

export const Navbar = ({ navLinks }: NavbarProps) => {
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <a href="\">Alex Antsiferov</a>
        </StyledLogo>
        <StyledNavigation>
          <ul className="nav-links">{linkList(navLinks)}</ul>
        </StyledNavigation>
      </StyledHeader>
    </>
  );
};
