import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family:'Roboto', sans-serif;
  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    height:100%;
  }

  body {
    background-color: #777777;
    webkit-font-smoothing:antialiased !important;
  }

  body, input, button {
    font-size:14px;
    font-family:'Roboto', Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border:0;
  }

  ul {
    list-style: none;
  }

  li {
    list-style-type:none;
  }

  a {
    text-decoration: none;
  }

`;
