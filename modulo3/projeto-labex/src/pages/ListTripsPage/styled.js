import styled from "styled-components";

export const ListContainer = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`
export const CardsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-top: 60%;
    }

`
export const CardViagem = styled.div`
    height: 250px;
    width: 50%;
    padding: 15px;
    margin: 15px 0;
    line-height: 200%;
    border: var(--roxo-azulado) 6px solid;
    box-shadow: inset 0 0 32px 0 var(--roxo-azulado), 0 0 32px 0 var(--roxo-azulado);
    border-radius: 16px;
    color: var(--roxo-profundo);
`