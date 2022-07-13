import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.form`
    padding: 10px;
    display: flex;
    gap: 8px;

    input {
        font-size: 18px;
    }

    button {
        font-weight: bold;
    }
`