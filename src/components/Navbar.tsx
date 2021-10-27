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
    transition: ${({ theme }) => theme.transitions.fast};
  }
  &.reduced-height {
    height: var(--nav-reduced-height);
    ${({ theme }) => theme.mixins.boxShadow};
  }
  transition: ${({ theme }) => theme.transitions.fast};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: var(--main-padding-x-sm);
    padding-right: var(--main-padding-x-sm);
    grid-template-columns: auto;
    justify-content: center;
  }
`;

const StyledLogo = styled.nav`
  font-size: 1.6em;
`;

const StyledNavigation = styled.nav`
  justify-self: end;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 48px;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    grid-gap: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ul.nav-anchors {
      display: none;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
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
    <li key={link.name}>
      <a href={link.url}>{link.name}</a>
    </li>
  ));

export const Navbar = ({ navLinks }: NavbarProps) => {
  const anchors = navLinks.filter((link) => !link.external);
  const external = navLinks.filter((link) => link.external);
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
