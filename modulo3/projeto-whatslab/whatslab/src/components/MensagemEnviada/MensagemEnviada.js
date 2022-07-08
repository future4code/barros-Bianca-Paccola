import React from "react"
import styled from 'styled-components'

const Balao = styled.span`
    align-self: ${props => props.remetente === "eu" ? "flex-start" : "flex-end"};
    text-align: center;
    margin: 20px;
    padding: 10px;
    border-radius: 30px;
    max-height: 100px;
    max-width: 400px;
    background-color: ${props => props.remetente === "eu" ? "#A8BAC5" : "#FFA500"};
`

export function MensagemEnviada(props) {

    return (
            <Balao remetente = {props.remetente} onDoubleClick={props.apagar}>
            <p> <strong>{props.remetente}{props.doispontos}</strong> {props.msg}</p> 
            </Balao>
    )
}