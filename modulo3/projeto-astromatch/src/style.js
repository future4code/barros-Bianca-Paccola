import styled from "styled-components";

export const CardContainer = styled.section`
    width: 70vh;
    min-height: 550px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;

    img:nth-child(1){
        align-self: flex-end;
        margin-right: 25px;
    }

    section:nth-child(2){
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

    div{
        margin: -90px auto 0 auto;
        padding: 0 20px;

        p{
            color: white;
            font-size: 18px;
        }
    }
    }

    section:nth-child(3){
        display: flex;
        width: 100%;
        justify-content: space-around;

        img{
            cursor: pointer;
        }
    }   
`

export const MatcheContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70vh;
    min-height: 550px;
    border: 1px solid black;
    align-items: center;

    div {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }


    ul{
        width: 50%;
        
        li {
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: space-between;

            p {
                font-size: 18px;
            }
        }
    }

        
    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    p {
        font-size: 22px;
        text-align: center;
        padding: 100px 30px;
    }

`