import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #f0f8ff;
    background-image: url("images/nature-background.jpg");
    background-size: cover; 
    background-attachment: fixed; 
} 
`;

export default GlobalStyle
