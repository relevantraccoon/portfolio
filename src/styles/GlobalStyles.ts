import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&family=Source+Sans+Pro:wght@400;600;700&family=Open+Sans:wght@400;600;700&family=Lato:wght@300;400;700&family=Montserrat:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&family=Nunito:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&family=Fira+Sans:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap");

  @font-face {
    font-family: "Caveat Brush";
    src: url("/src/assets/fonts/CaveatBrush-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Varela Round', sans-serif;
  }
`;