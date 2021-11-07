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
      overlay: string;
      text: string;
      textInverted: string;
      starkAccent: string;
      placeholder: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      xl: string;
    };
    transitions: {
      default: string;
      fast: string;
    };
    zIndices: {
      bg: number;
      content: number;
      cardImage: number;
      cardImageOverlay: number;
      cardDescription: number;
      cardTop: number;
      navbar: number;
    };
  }
}
