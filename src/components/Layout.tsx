import { ReactNode } from "react";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

import { Footer } from "./Footer";
import { Navbar, NavbarProps } from "./Navbar";

const Tracker = () => (
  <InView
    as="div"
    onChange={(inView) => {
      const navbar = document.querySelector("header");
      if (!inView) navbar?.classList.add("reduced-height");
      else navbar?.classList.remove("reduced-height");
    }}
  ></InView>
);

const StyledWrapper = styled.main`
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);
  max-width: var(--wrapper-max-width);
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(var(--nav-full-height) + 80px);
  margin-bottom: 80px;
  display: grid;
  grid-auto-flow: row;
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: calc(var(--nav-full-height) + 40px);
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
    <Tracker />
    <StyledWrapper>{children}</StyledWrapper>
    <Footer />
  </>
);
