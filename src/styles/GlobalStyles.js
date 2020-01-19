import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        color: #202020;
        background: #fafafe;
        font-family: "Arial", sans-serif;
        font-size: 16px;
    }

    ul {
        margin: 0;
        padding: 0;
    }
`;