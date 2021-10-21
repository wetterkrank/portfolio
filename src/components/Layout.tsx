import { ReactNode } from "react";
import styled from "styled-components";
import { Navbar } from "./Navbar";

const StyledLayout = styled.div`
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);
`;

type LayoutProps = {
  children: ReactNode;
  navLinks: {
    name: string;
    url: string;
  }[];
};

export const Layout = ({ children, navLinks }: LayoutProps) => (
  <>
    <Navbar navLinks={navLinks} />
    <StyledLayout>{children}</StyledLayout>
  </>
);
