import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.primary};
  }

  :focus {
    outline: 1px dashed ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  h2, h3, h4 {
    font-weight: normal;
  }
  strong {
    font-weight: normal;
    color: ${({ theme }) => theme.colors.accent};
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    color: ${({ theme }) => theme.colors.accent};
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.starkAccent};
    }
    transition: ${({ theme }) => theme.transitions.default};
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
