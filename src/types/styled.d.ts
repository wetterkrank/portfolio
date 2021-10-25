import "styled-components";
import { FlattenSimpleInterpolation } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mixins: {
      flexCenter: FlattenSimpleInterpolation;
      inlineLink: FlattenSimpleInterpolation;
      boxShadow: FlattenSimpleInterpolation;
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      contrasting: string;
      emphasis: string;
      back: string;
      text: string;
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
  }
}
