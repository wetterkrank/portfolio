import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      emphasis: string;
      back: string;
      placeholder: string;
    };
  }
}
