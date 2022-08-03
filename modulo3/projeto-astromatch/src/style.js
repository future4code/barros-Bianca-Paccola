import styled from "styled-components";

export const CardContainer = styled.section`
    width: 70vh;
    min-height: 500px;
    max-height: 550px;
    border: 1px solid #DA2D49;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(3px);

    img:nth-child(1){
        align-self: flex-end;
        margin-right: 25px;
        cursor: pointer;
    }

    section:nth-child(2){
        width: 85%;
        height: 400px;

        span{
        background-image: url(${props => props.back});
        
        background-size: cover;
        background-repeat: no-repeat;

        -webkit-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        -moz-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        -webkit-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        background-position: center;
        box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,0.5), inset 0px -136px 64px -11px rgba(38,38,38,0.5), inset 0px -136px 64px -11px rgba(38,38,38,0.5),     
        rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        width: 100%;
        min-height: 95%;
        max-height: 100%;
        display: block;
        }

    div{
        margin: -90px auto 0 auto;
        padding: 0 20px;

        p{
            color: white;
            font-size: 18px;
            text-shadow: 2px 2px #161B22;
        }
    }
    }

    section:nth-child(3){
        display: flex;
        width: 100%;
        justify-content: space-around;

        svg{
            cursor: pointer;

            &:hover{
                fill: red;
            }
        }
    }   
`

export const Icone = styled.svg`

`

export const MatcheContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70vh;
    min-height: 550px;
    border: 1px solid black;
    align-items: center;
    background-color: white;

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

`

export const Aviso = styled.p`
            font-size: 22px;
        text-align: center;
        padding: 100px 30px;
`