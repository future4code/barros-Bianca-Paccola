import React, { useState } from "react";
import "./style.js";
import { PostContainer, PostHeader, PostFooter, UserPhoto, PostPhoto } from "./style.js";

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
  const [comentario, setValorInput] = useState('');
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
    setValorInput(e.target.value);
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
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}  valorInput={comentario}/>;
    }
    setValorInput('')
    console.log(comentando);
  };

  const aoEnviarComentario = () => {
    setComentando(false);
    if (comentario !== ''){
    setNumeroComentarios(numeroComentarios + 1);
    }
    console.log(comentario)
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
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleComentario} />;
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto
          src={props.fotoUsuario}
          alt={"Imagem do usuario"}
        />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
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
        
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  );
}

export default Post;
