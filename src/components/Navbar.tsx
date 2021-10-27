import styled from "styled-components";

const StyledHeader = styled.header`
  height: var(--nav-full-height);
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
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto;
    align-content: center;
    grid-gap: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: var(--main-padding-x-sm);
    padding-right: var(--main-padding-x-sm);
  }
`;

const StyledLogo = styled.nav`
  min-width: 200px;
  font-size: 2em;
  a {
    text-decoration: none;
  }
`;

const StyledNavigation = styled.nav`
  justify-self: end;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-self: start;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    justify-content: start;
    grid-auto-flow: column;
    grid-gap: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      grid-gap: 16px;
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

export const Navbar = ({ navLinks }: NavbarProps) => {
  return (
    <>
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
        </StyledNavigation>
      </StyledHeader>
    </>
  );
};
