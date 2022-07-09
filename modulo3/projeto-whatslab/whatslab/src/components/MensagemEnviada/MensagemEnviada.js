import React from "react"
import {Balao} from '../../style'

export function MensagemEnviada(props) {

    return (
            <Balao remetente = {props.remetente} onDoubleClick={props.apagar}>
            <p> <strong>{props.remetente}{props.doispontos}</strong> {props.msg}</p> 
            </Balao>
    )
}