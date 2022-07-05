import React from "react"
import { BalaoMsg } from "../../style"

export function MensagemEnviada(Props) {
    return (
        <BalaoMsg>
        <strong>{Props.remetente}{Props.doispontos}</strong> {Props.msg}
        </BalaoMsg>
    )
}