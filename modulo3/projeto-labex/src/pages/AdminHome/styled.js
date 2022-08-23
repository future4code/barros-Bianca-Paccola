import styled from "styled-components";

export const CardsContainer = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;
   justify-content: center;
   gap: 20px;

    h1{
        margin-top: 40%;
        text-align: center;
    }

`
export const CardViagem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5%;
    height: 120px;
    width: 500px;
    padding: 10px;
    margin: 15px 0;
    border-radius: 16px;
    color: var(--roxo-profundo);
    background-color: 	rgba(250, 235, 215, 0.7);

    div{
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }

    span {
        cursor: pointer;
    }
`