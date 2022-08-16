import styled from "styled-components";

export const FormContainer = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 35px 75px;
    width: 50%;
    border: 1px solid black;

    input, select{
        width: 80%;
        font-size: 18px;
        padding: 5px;
        border-radius: 3px;
    }
`