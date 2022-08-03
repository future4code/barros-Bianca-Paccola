import { createGlobalStyle } from "styled-components";
import Background from './Components/images/fundo.jpg'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-image: url(${Background});
    }
`
export default GlobalStyle;