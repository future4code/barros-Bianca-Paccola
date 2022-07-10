import styled from 'styled-components'

export const Header1 = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 100%;
    }
`

export const Main = styled.main`
    display: flex;
    height: 85vh;

    aside{
        background-color: #FFA500;
        width: 10%;
    }
    section{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        @media(max-width: 700px){
        min-height: 85vh;
    }
    }

    div{
        display: flex;
        width: 100%;
        flex-direction: column;
        overflow-y: auto;
        overflow-wrap: break-word;
        min-height: 62vh;
        
        ::-webkit-scrollbar {
            width: 15px;
        }

        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        }
    
        ::-webkit-scrollbar-thumb {
        background: #45525B; 
        border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
        background: #FD7D02; 
        }

        @media(max-width: 770px) {
            max-height: 57vh;
        }
}

@media(max-width: 770px) {
            min-height: 85vh;
        } 

`
export const Footer = styled.footer`
    min-height: 5vh;
    background-color: gray;
    margin: 0;
    
    p{
        margin: 0;
        text-align: center;
    }
`

export const FormMsg = styled.form`
        display: flex;
        align-items: center;
        min-height: 70px;
        gap: 30px;
        margin-bottom: 10px;

        input:nth-child(3) {
            font-size: 16px;
            text-transform: uppercase;
            padding: 5px 8px;
            color: #45525B;
            border: 2px solid #45525B;
            border-radius: 5px;
        }

        input:focus, textarea:focus{
            border: 2px solid #FFA500;
            border-radius: 3px;
            outline: none;
        }

        label{
            display: flex;
            gap: 10px;
        }

        @media(max-width: 770px) {
            flex-direction: column;
            align-items: center;
            margin-top: 5px;
            gap: 8px;
        }

`

export const Balao = styled.span`
    align-self: ${props => props.remetente === "eu" ? "flex-end" : "flex-start"};
    margin: 20px;
    padding: 15px;
    border-radius: 30px 15px 30px 0px ;
    max-height: 100px;
    max-width: 400px;
    background-color: ${props => props.remetente === "eu" ? "#FFA500" : "#A8BAC5"};
    cursor: pointer;

    p {
        margin: 0;
    }

    p:nth-child(1){
       color: #45525B;
    }
`