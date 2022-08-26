import styled from "styled-components"

export const CardsContainer = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
   align-items: center;
   justify-content: center;
   gap: 20px;

    h1{
        text-align: center;
    }
`

export const CardViagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    max-height: 200px;
    line-height: 200%;
    text-align: center;
    width: 500px;
    padding: 10px;
    margin: 15px 0;
    border-radius: 16px;
    color: var(--roxo-profundo);
    background-color: 	rgba(250, 235, 215, 0.7);
`

export const CardCandidate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5%;
    height: 250px;
    width: 500px;
    padding: 10px;
    margin: 15px 0;
    border-radius: 16px;
    color: var(--roxo-profundo);
    background-color: 	rgba(250, 235, 215, 0.7);

    span{
        color: var(--lilas);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin-top: 15px;
    }
`