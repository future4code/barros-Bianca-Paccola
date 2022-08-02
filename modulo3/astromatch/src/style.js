import styled from "styled-components";

export const CardContainer = styled.section`
    width: 70vh;
    height: 550px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;

    div:nth-child(1){
        width: 85%;
        height: 400px;

        span{
        background-image: url(${props => props.back});
        background-position: center;
        background-size: cover, contain;
        background-repeat: no-repeat;
        -webkit-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        -moz-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        width: 100%;
        height: 100%;
        display: block;
    }

    div:nth-child(2){
        margin: -90px auto 0 auto;
        padding: 0 20px;

        p{
            color: white;
            font-size: 18px;
        }
    }
    }

    section{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

   
`