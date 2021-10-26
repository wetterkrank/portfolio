import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const StyledWrapper = styled.main`
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);
  max-width: var(--wrapper-max-width);
  margin: auto;
  display: grid;
  grid-auto-flow: row;
  gap: 24px;
  margin-bottom: 32px;
`;

type LayoutProps = {
  children: ReactNode;
  links: {
    navLinks: {
      name: string;
      url: string;
    }[];
    footerLinks: {
      name: string;
      url: string;
    }[];
  };
};

export const Layout = ({ children, links }: LayoutProps) => (
  <>
    <Navbar navLinks={links.navLinks} />
    <StyledWrapper>{children}</StyledWrapper>
    <Footer links={links.footerLinks} />
  </>
);
