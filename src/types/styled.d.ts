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
      emphasis: string;
      back: string;
      placeholder: string;
    };
    breakpoints: {
      narrow: string;
    };
    borders: {
      radius: string;
    };
  }
}
