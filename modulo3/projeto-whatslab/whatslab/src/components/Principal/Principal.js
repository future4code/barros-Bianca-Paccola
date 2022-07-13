import React, { useState } from "react";
import { Main } from "../../style";
import { MensagemEnviada } from "../MensagemEnviada/MensagemEnviada";
import { Inputs } from "../Inputs/Inputs";
import { useEffect, useRef } from "react";

function Principal(Props) {
  //seta o estado inicial dos inputs do form
  const [inputRemetente, setInputRemetente] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const [mensagem, setInputMensagem] = useState(false);

  //lógica para manter a barra de rolagem sempre na última linha
  const areaMensagens = useRef();
  useEffect(()=>{
    if (areaMensagens.current.scrollHeight > areaMensagens.current.offsetHeight){
      areaMensagens.current.scrollTop = areaMensagens.current.scrollHeight - areaMensagens.current.offsetHeight
    }
  })

  //seta o estado inicial do array que vai gerar as postagens, cria um array vazio
  const [listaMensagens, setListaMensagens] = useState([]);

  //pega o que é preenchido no input de remetente
  const handleInputRemetente = (event) => {
    setInputRemetente(event.target.value);
  };

  //pega o que é preenchido no input de mensagem
  const handleInputMsg = (event) => {
    setInputMsg(event.target.value);
  };

  //evento de clique
  function EnviarMsg(e) {
    // previne que o envio do fomulário recarregue a página
    e.preventDefault();

    //entra aqui se os ao clicar os inputs não estiverem vazios
    if (inputMsg !== "" && inputRemetente !== "") {
      setInputMensagem(!mensagem);

      //cria un novo array, espelhado no original e adicionando mais um objeto com os dados que foram captados nos inputs
      const feedAtualizado = [
        ...listaMensagens,
        { remetente: inputRemetente.toLowerCase().trim(), mensagem: inputMsg },
      ];

      //atualiza o array original com a nova mensagem(objeto)
      setListaMensagens(feedAtualizado);

      //retorna os inputs ao estado inicial, vazios, para que possam receber novos dados
      setInputRemetente("");
      setInputMsg("");
    }
  }

  //função chamada no double clieque que excluir a mensagem
  const apagarMsg = (indexRmv) => {
    if (window.confirm("Deseja apagar esta mensagem???")) {
      const feedAtualizadoRmv = listaMensagens.filter((item, index) => {
        return index !== indexRmv; //filtra a lista de mensagens, tirando o indice da mensagem removida
      });
      //atualiza a lista de mensagens
      setListaMensagens(feedAtualizadoRmv);
    }
  };

  //mapeia os objetos do array para posteriomente serem renderizados na tela
  const feedMap = listaMensagens.map((item, index) => {
    return (
      <MensagemEnviada
        key={index}
        remetente={item.remetente}
        msg={item.mensagem}
        apagar={() => {
          apagarMsg(index);
        }}
      ></MensagemEnviada>
    );
  });

  //função identificar a tela enter no onKeyPress
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      EnviarMsg(event);
    }
  };

  return (
    <div>
      <Main>
        <aside></aside>
        <section>
          <div ref={areaMensagens}>{feedMap}</div>
          <Inputs
            remetente={inputRemetente}
            handleRemetente={handleInputRemetente}
            msg={inputMsg}
            handleMsg={handleInputMsg}
            enviar={EnviarMsg}
            teclaEnter={handleKeyPress}
          ></Inputs>
        </section>
        <aside></aside>
      </Main>
    </div>
  );
}

export default Principal;
