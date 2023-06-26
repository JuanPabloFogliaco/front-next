import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
html,
body {
    padding: 0;
    margin: 0;
    background-color: white;
    font-family: 'Open Sans', sans-serif;
    font-size: 42px;
    font-weight: 300;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
