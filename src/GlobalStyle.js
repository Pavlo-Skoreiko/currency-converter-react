import { createGlobalStyle } from "styled-components";
import background from "./images/money.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: "Noto Serif Georgian", serif;
  min-height: 100vh;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
}
`;