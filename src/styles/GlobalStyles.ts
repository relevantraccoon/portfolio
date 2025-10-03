import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");

  @font-face {
    font-family: "Caveat Brush";
    src: url("/src/assets/fonts/CaveatBrush-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Varela Round', sans-serif;
    background-color: ${({ theme }) => theme.colors.palette.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
`;