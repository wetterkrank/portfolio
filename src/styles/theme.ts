import { DefaultTheme } from "styled-components";
import mixins from "./mixins";

// NB: Set theme color in the index.html
const theme: DefaultTheme = {
  mixins,
  colors: {
    primary: "#F6AE2D",
    secondary: "#86BBD8",
    backgroundAlt: "#FAF4D3",
    background: "#2F4858",
    textAlt: "#000000",
    text: "#FFFFFF",
    link: "#33658A",
    linkActive: "#F6AE2D",
    linkHover: "#F6AE2D",
    placeholder: "#D3D3D3",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    xl: "1200px",
  },
  borders: {
    radius: "3px",
  },
  transitions: {
    default: "all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
};

export default theme;
