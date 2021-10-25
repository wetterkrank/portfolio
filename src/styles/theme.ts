import { DefaultTheme } from "styled-components";
import mixins from "./mixins";

const theme: DefaultTheme = {
  mixins,
  colors: {
    primary: "#33658A",
    secondary: "#2F4858",
    tertiary: "#81A4CD",
    contrasting: "#F6AE2D",
    emphasis: "#F26419",
    back: "#E6ECF3",
    text: "#000000",
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
};

export default theme;
