import styled from "styled-components";

export const HomeContainer = styled.body`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        width: 80%;
        margin-bottom: 7%;
        text-align: center;
    }

    div{
        width: 80%;
        display: flex;
        justify-content: space-evenly;
    }

    img:nth-child(1) {
        max-width: 330px;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
    }

    img:nth-child(4) {
        max-width: 330px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        transform: scaleX(-1);
    }
`