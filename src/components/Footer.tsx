import styled from "styled-components";
import { GitHubIcon } from "./icons";

const StyledFooter = styled.footer`
  min-height: var(--nav-full-height);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: var(--main-padding-x-sm);
    padding-right: var(--main-padding-x-sm);
  }

  background-color: ${({ theme }) => theme.colors.tertiary};

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <span>
        © 2021 Alex Antsiferov ·{" "}
        <a href="https://github.com/wetterkrank/portfolio">
          this site's code on <GitHubIcon />
        </a>
      </span>
    </StyledFooter>
  );
};
