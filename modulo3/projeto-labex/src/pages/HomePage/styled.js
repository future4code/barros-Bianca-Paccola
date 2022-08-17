import styled from "styled-components";

export const HomeContainer = styled.body`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        max-width: 800px;
        margin-bottom: 7%;
        text-align: center;
    }

    div{
        width: 80%;
        display: flex;
        justify-content: space-evenly;
    }

    img{
        max-width: 330px;
        position: absolute;
        z-index: 0;
        filter: hue-rotate(35deg)
    }

    img:nth-child(1) {
        bottom: 0;
        right: 0;
    }

    img:nth-child(4) {
        top: 0;
        left: 0;
        transform: scaleX(-1);
    }
`