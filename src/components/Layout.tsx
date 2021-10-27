import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Navbar, NavbarProps } from "./Navbar";

const StyledWrapper = styled.main`
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);
  max-width: var(--wrapper-max-width);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  margin-top: 80px;
  display: grid;
  grid-auto-flow: row;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: var(--main-padding-x-sm);
    padding-right: var(--main-padding-x-sm);
  }
`;

type LayoutProps = {
  children: ReactNode;
  links: NavbarProps;
};

export const Layout = ({ children, links }: LayoutProps) => (
  <>
    <Navbar navLinks={links.navLinks} />
    <StyledWrapper>{children}</StyledWrapper>
    <Footer />
  </>
);
