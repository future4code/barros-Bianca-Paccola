import React, {useState} from 'react'
import {Main} from '../../style'
import {MensagemEnviada} from '../MensagemEnviada/MensagemEnviada'
import {Inputs} from '../Inputs/Inputs'


function Principal(Props) {

const [inputRemetente, setInputRemetente] = useState("")
const [inputMsg, setInputMsg] = useState("")

const handleInputRemetente = (event) => {
    setInputRemetente(event.target.value)
}

const handleInputMsg = (event) => {
    setInputMsg(event.target.value)
}

let balaoMensagem

function EnviarMsg(e) { 
    e.preventDefault()
        balaoMensagem = <MensagemEnviada remetente={inputRemetente} msg={inputMsg}></MensagemEnviada>
    console.log(inputMsg, inputRemetente);
  }

    return ( 
        <div>
            <Main>
                <aside></aside>
                <section>
                {balaoMensagem}
                <Inputs remetente= {inputRemetente}
                    handleRemetente = {handleInputRemetente}
                    msg = {inputMsg}
                    handleMsg = {handleInputMsg}
                    enviar = {EnviarMsg}
                ></Inputs>
                </section>
                <aside></aside>
            </Main>
        </div>
    )
}

export default Principal;