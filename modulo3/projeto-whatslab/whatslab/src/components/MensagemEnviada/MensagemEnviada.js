import React from "react"
import {Balao} from '../../style'

export function MensagemEnviada(props) {
    //Renderização condicional
    return (
        <>
            {props.remetente !== 'eu' && (
                <Balao remetente = {props.remetente} onDoubleClick={props.apagar}>
                <p><strong>{props.remetente}: </strong> </p>
                <p> {props.msg}</p> 
                </Balao>
            )}

            {props.remetente === 'eu' && (
                <Balao remetente = {props.remetente} onDoubleClick={props.apagar}>
                <span>{props.msg}</span> 
                </Balao>
            )}
        </>
    )
}