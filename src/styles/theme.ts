import { DefaultTheme } from "styled-components";
import mixins from "./mixins";

const theme: DefaultTheme = {
  mixins,
  colors: {
    accent: "#06d6a0", // #81D2C7, #ADD7F6
    primary: "#284b63", // #61707D
    secondary: "#e9ecef",
    tertiary: "#1D2D44",
    overlay: "#faf9f9",
    text: "#FFFFFF",
    textInverted: "#000000",
    starkAccent: "#5CFFBF",
    placeholder: "#E4E4E4",
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
    fast: "all 0.1s linear",
  },
};

export default theme;
