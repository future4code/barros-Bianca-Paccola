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
        font-family: 'Prompt', sans-serif;
        list-style: none;
    }

    body{
        background-color: var(--cor-clara);
    }

    h1 {
        color: var(--roxo-profundo);
        z-index: 1;
        font-weight: 800;
    }

    button {
        font-size: 16px;
        font-weight: 700;
        text-decoration: none;
        padding: 12px;
        border: var(--lilas) 2px solid;
        box-shadow: inset 0 0 32px 0 var(--lilas), 0 0 32px 0 var(--lilas);
        border-radius: 16px;
        background-color: var(--lilas);
        color: antiquewhite;
        font-weight: 400;

        text-shadow: 0 0 8px var(--lilas), 0 0 32px;
        cursor: pointer;
        z-index: 1;

        &:hover{

            background-color: var(--background-btn);
        color: var(--roxo-profundo);
        }

        @media only screen and (max-width: 381px) {
                font-size: 12px;
                padding: 10px;
                }

                @media only screen and (max-width: 281px) {
                font-size: 10px;
                padding: 8px;
                }
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 35px 25px;
        width: 500px;
        max-width: 90%;
        margin: 15px 10px;
        border: var(--roxo-azulado) 2px solid;
        box-shadow: inset 0 0 32px 0 var(--roxo-azulado), 0 0 32px 0 var(--roxo-azulado);
        border-radius: 16px;
        color: var(--roxo-profundo);

        input, select{
            width: 90%;
            font-size: 18px;
            padding: 5px;
            border-radius: 3px;

            @media only screen and (max-width: 285px) {
                width: 99%;
                }
        }

        div{
            display: flex;
            width: 90%;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        label{
            margin: 20px 0 10px 0;
            text-align: center;
        }
    }

    p{
        font-size: 16px;
    }

`