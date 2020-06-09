import { createGlobalStyle, DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    darkGray: string;
    lightGray: string;
    darkOrange: string;
    lightOrange: string;
    background: string;
  }
}

export const theme: DefaultTheme = {
  darkGray: "#45525b",
  lightGray: "#a8bbc6",
  darkOrange: "#fe7e02",
  lightOrange: "#f9b24e",
  background: "fff",
};

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin : 0;
    box-sizing: border-box;
    font-size: 14px;
  } 



  button {
    cursor: pointer;
  }

  body {
    background: ${theme.lightGray};
  }

`;
