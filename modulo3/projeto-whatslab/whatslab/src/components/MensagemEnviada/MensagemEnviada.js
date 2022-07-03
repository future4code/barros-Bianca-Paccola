import React from "react"
import { BalaoMsg } from "../../style"
// import { BalaoMsg } from '../../style'

export function MensagemEnviada(Props) {
    return (
        <BalaoMsg>
        <strong>{Props.remetente}</strong>: {Props.msg}
        </BalaoMsg>
    )
}