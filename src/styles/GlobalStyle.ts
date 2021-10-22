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
  }

  :focus {
    outline: 2px dashed ${({ theme }) => theme.colors.emphasis};
    outline-offset: 3px;
  }

  h4 {
    margin: 8px 0 8px 0;
  }
`;

export default GlobalStyle;
