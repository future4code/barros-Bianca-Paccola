import React, { useState } from "react";
import "./style.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import iconeMarcar from "../../img/bookmark.svg";
import iconeMarcado from "../../img/bookmark-black.svg";
import iconeCompartilhar from "../../img/send.svg"
import { SecaoCompartilhar } from "../SecaoCompartilhar/SecaoCompartilhar";



function Post(props) {
  const [numeroCurtidas, setnumeroCurtidas] = useState(0);
  const [curtido, setCurtido] = useState(false);
  const [comentando, setComentando] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [valorInput, setValorInput] = useState('');
  const [marcado, setMarcado] = useState(false);
  const [compartilhar, setCompartilhar] = useState(false)

  let iconeMarcacao;

  if (marcado) {
    iconeMarcacao = iconeMarcado;
  } else {
    iconeMarcacao = iconeMarcar;
  }

  const onClickMarcado = () => {
    setMarcado(!marcado);
  };

  const handleComentario = (e) => {
    setValorInput(e.state.value);
  };

  const onClickCurtida = () => {
    setCurtido(!curtido);
    if (!curtido) {
      setnumeroCurtidas(numeroCurtidas + 1);
    } else if (curtido) {
      setnumeroCurtidas(numeroCurtidas - 1);
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando);
    if (comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleComentario} valorInput={valorInput}/>;
    }
    console.log(comentando);
  };

  const aoEnviarComentario = () => {
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  };


  let componenteCompartilhar;
  if (compartilhar){
    componenteCompartilhar = <SecaoCompartilhar/>
    }
  
  const onClickCompartilhar = () => {
    setCompartilhar(!compartilhar)
  }


  let iconeCurtida;

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto;
  } else {
    iconeCurtida = iconeCoracaoBranco;
  }

  let componenteComentario;

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />;
  }

  return (
    <div className="PostContainer">
      <div className="PostHeader">
        <img
          className="UserPhoto"
          src={props.fotoUsuario}
          alt={"Imagem do usuario"}
        />
        <p>{props.nomeUsuario}</p>
      </div>

      <img className="PostPhoto" src={props.fotoPost} alt={"Imagem do post"} />

      <div className="PostFooter">
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

        <IconeComContador 
        icone={iconeMarcacao}
        onClickIcone={onClickMarcado}
        />

        <IconeComContador 
        icone={iconeCompartilhar}
        onClickIcone={onClickCompartilhar}
        />   
        
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  );
}

export default Post;
