import React from "react"
import styled from 'styled-components'

const Balao = styled.span`
    align-self: flex-end;
    text-align: center;
    margin: 20px;
    padding: 15px;
    border-radius: 30px;
    max-height: 100px;
    max-width: 400px;
    background-color: #FFA500;
`

export function MensagemEnviada(Props) {

    return (
            <Balao>
            <p> <strong>{Props.remetente}{Props.doispontos}</strong> {Props.msg} </p>
            </Balao>
    )
}