import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

export const Forms = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #636e72;
    border: 2px solid #2d3436;
    border-radius: 30px;
    color: white;

    input {
        border-radius: 10px;
        font-size: 16px;
        margin-top: 5px;
    }

    label {
        display: flex;
        flex-direction: column;
        font-size: 16px;
    }

`

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background-color: #636e72;
    border: 2px solid #2d3436;
    border-radius: 30px;
    color: white;

    input {
        border-radius: 10px;
        font-size: 16px;
        margin-top: 5px;
    }

    label {
        display: flex;
        flex-direction: column;
        font-size: 16px;
    }

    select {
        font-size: 16px;
    }
`

export const BotaoProximaEtapa = styled.button`
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #2d3436;
    color: white;
    display: ${props => props.display ? 'none' : 'block'}
`

export const Inicio = styled.button`
font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: #2d3436;
    color: white;
`