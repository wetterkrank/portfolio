import styled from "styled-components";
import { GitHubIcon } from "./icons";

const StyledFooter = styled.footer`
  min-height: var(--nav-full-height);
  ${({ theme }) => theme.mixins.flexCenter};

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: var(--main-padding-x-sm);
    padding-right: var(--main-padding-x-sm);
  }

  background-color: ${({ theme }) => theme.colors.tertiary};

  span {
    text-align: center;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <span>
        © 2021&ndash;{new Date().getFullYear()} Alex Antsiferov ·{" "}
        <a href="https://github.com/wetterkrank/portfolio">
          this site's code on <GitHubIcon />
        </a>
      </span>
    </StyledFooter>
  );
};
