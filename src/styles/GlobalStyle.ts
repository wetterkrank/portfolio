import { createGlobalStyle } from "styled-components";
import variables from "./variables";
// import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  :focus {
    outline: 1px dashed ${({ theme }) => theme.colors.linkActive};
    outline-offset: 3px;
  }

  h4 {
    margin: 8px 0 8px 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${({ theme }) => theme.transitions.default};;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.linkActive};
    }
  }

  img,
  svg,
  picture {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
