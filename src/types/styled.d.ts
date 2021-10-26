import "styled-components";
import { FlattenSimpleInterpolation } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mixins: {
      flexCenter: FlattenSimpleInterpolation;
      boxShadow: FlattenSimpleInterpolation;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundAlt: string;
      text: string;
      textAlt: string;
      placeholder: string;
      link: string;
      linkActive: string;
      linkHover: string;
      placeholder: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      xl: string;
    };
    borders: {
      radius: string;
    };
    transitions: {
      default: string;
    };
  }
}
