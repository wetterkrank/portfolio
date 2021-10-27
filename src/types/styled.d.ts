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
      tertiary: string;
      accent: string;
      accentSubdued: string;
      overlay: string;
      text: string;
      textInverted: string;
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
      fast: string;
    };
  }
}
