import { DefaultTheme } from "styled-components";
import mixins from "./mixins";

// NB: Set theme color in the index.html
const theme: DefaultTheme = {
  mixins,
  colors: {
    accent: "#F6AE2D",
    accentSubdued: "#EB9C0A",
    primary: "#415a77",
    secondary: "#F8F7F9",
    tertiary: "#1b263b",
    overlay: "#DBE4EE",
    text: "#FFFFFF",
    textInverted: "#000000",
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
