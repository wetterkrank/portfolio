import { DefaultTheme } from "styled-components";
import mixins from "./mixins";

const theme: DefaultTheme = {
  mixins,
  colors: {
    primary: "",
    secondary: "slategray",
    emphasis: "red",
    back: "#e6f1ff",
    placeholder: "lightgray",
  },
  breakpoints: {
    narrow: "768px",
  },
  borders: {
    radius: "3px",
  },
};

export default theme;
