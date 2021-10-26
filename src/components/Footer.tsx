import styled from "styled-components";
import { GitHubIcon } from "./icons";

const StyledFooter = styled.footer`
  min-height: var(--nav-full-height);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px var(--main-padding-x) 16px var(--main-padding-x) 16px;
  background-color: ${({ theme }) => theme.colors.tertiary};

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  li {
    float: left;
    padding: 8px 16px 8px 16px;
  }
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
        <a href="https://github.com/wetterkrank">
          this site's code on <GitHubIcon />
        </a>
      </span>
    </StyledFooter>
  );
};
