import React, {useState} from 'react'
import {BalaoCinza, BalaoLaranja, Main} from '../../style'
import {MensagemEnviada} from '../MensagemEnviada/MensagemEnviada'
import {Inputs} from '../Inputs/Inputs'


function Principal(Props) {

//seta o estado inicial dos inputs do form
const [inputRemetente, setInputRemetente] = useState("")
const [inputMsg, setInputMsg] = useState("")
const [mensagem, setInputMensagem] = useState(false)

//seta o estado inicial do array que vai gerar as postagens, cria um array vazio
const [listaMensagens, setListaMensagens] = useState([])

//pega o que é preenchido no input de remetente
const handleInputRemetente = (event) => {
    setInputRemetente(event.target.value.toLowerCase())
}

//pega o que é preenchido no input de mensagem
const handleInputMsg = (event) => {
    setInputMsg(event.target.value)
}

//evento de clique
function EnviarMsg(e) { 

    // previne que o envio do fomulário recarregue a página
    e.preventDefault()

    //entra aqui se os ao clicar os inputs não estiverem vazios
    if (inputMsg !== "" && inputRemetente !== ""){
        setInputMensagem(!mensagem)
   
        //cria un novo array, espelhado no original e adicionando mais um objeto com os dados que foram captados nos inputs
        const feedAtualizado = [...listaMensagens, {remetente:inputRemetente, mensagem: inputMsg}]

        //atualiza o array original com a nova mensagem(objeto)
        setListaMensagens(feedAtualizado)

        //retorna os inputs ao estado inicial, vazios, para que possam receber novos dados
        setInputRemetente('')
        setInputMsg('')
    }
}

    //mapeia os objetos do array para posteriomente serem renderizados na tela
  const feedMap = listaMensagens.map((item)=> {
        return <MensagemEnviada remetente={item.remetente} doispontos=':' msg={item.mensagem} ></MensagemEnviada>
  })

    return ( 
        <div>
            <Main>
                <aside></aside>
                <section>
                <div>
                    {feedMap}
                </div>
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