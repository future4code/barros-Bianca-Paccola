import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --roxo-profundo: #170826;
        --lilas: #7641BF;
        --roxo-profundo-azulado: #1B0A40;
        --roxo-azulado: #46268C;
        --rosa-claro: #B35ABF;
        --cor-clara: #b1aab8;
        --background-btn: rgba(250, 235, 215, 0.7);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--cor-clara);
    }

    h1 {
        font-family: 'Nova Square', cursive;
        color: var(--roxo-profundo);
        z-index: 1;
    }

    p {
        font-family: 'Ubuntu', sans-serif;
    }

    button {
        font-size: 16px;
        font-weight: 700;
        text-decoration: none;
        padding: 12px;
        background-color: var(--background-btn);
        border: var(--lilas) 3px solid;
        box-shadow: inset 0 0 32px 0 var(--lilas), 0 0 32px 0 var(--lilas);
        border-radius: 16px;
        color: var(--roxo-profundo);
        text-shadow: 0 0 8px var(--lilas), 0 0 32px;
        cursor: pointer;
        z-index: 1;

        &:hover{
            background-color: var(--lilas);
            color: antiquewhite;
        }
    }

`