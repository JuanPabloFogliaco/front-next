import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: "whitesmoke";
    font-family: 'Roboto', sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;
