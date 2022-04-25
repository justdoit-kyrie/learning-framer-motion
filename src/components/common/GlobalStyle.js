import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Source Sans Pro", sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
