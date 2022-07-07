import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.js'
import {MainContainer, Form} from './style.js'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
`

function App() {

  //seta o estado inicial dos inputs do form
  const [inputNome, setInputNome] = useState('')
  const [inputFotoPerfil, setInputFotoPerfil] = useState('')
  const [inputFotoPost, setInputFotoPost] = useState('')

  //seta o estado inicial do array que vai gerar as postagens
  const [feed, setfeed] = useState([
    {
    nomeUsuario:'paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
    },

    {
      nomeUsuario:'aninha',
      fotoUsuario:'https://picsum.photos/id/239/50/50',
      fotoPost:'https://picsum.photos/id/237/200/150'
    },

    {
      nomeUsuario:'juninho',
      fotoUsuario:'https://picsum.photos/id/238/50/50',
      fotoPost: 'https://picsum.photos/id/236/200/150'
    }
  ])

  //pega o que é preenchido no input de Nome
  const preencheNome = (event) => {
    setInputNome(event.target.value)
  }

  //pega o que é preenchido no input de Foto
  const preencheFotoPerfil = (event) => {
    setInputFotoPerfil(event.target.value)
  }

  //pega o que é preenchido no segundo input de Foto
  const preencheFotoPost = (event) => {
    setInputFotoPost(event.target.value)
  }

  //Evento de clique
  const enviaPost = (event) => {
    
    //Previne que o envio do formulário recarregue a página
    event.preventDefault()

    //Cria um novo array, espelhado no primeiro e adiciona mais um objeto com os dados que foram captados nos inputs
    const feedAtualizado = [...feed, {nomeUsuario: inputNome, fotoUsuario: inputFotoPerfil, fotoPost: inputFotoPost}]

    //Atualiza o array original com os novos dados
    setfeed(feedAtualizado)

    //Retorna o input ao estado inicial vazio, pronto para receber novos dados
    setInputNome('')
    setInputFotoPerfil('')
    setInputFotoPost('')
  }

  //Mapeia os objetos do array para poder rederiza-los depois na tela
  const feedMap = feed.map((item)=> {
    return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost} />})

return(
  <MainContainer>
    <GlobalStyle/>
      {feedMap}
      <Form>
        <input type='text' required placeholder='Nome de Usuário...' value={inputNome} onChange={preencheNome}></input>
        <input type='url' required placeholder='Url foto de perfil...' value={inputFotoPerfil}onChange={preencheFotoPerfil}></input>
        <input type='url' required placeholder='Url foto do post...' value={inputFotoPost} onChange={preencheFotoPost}></input>
        <button onClick={enviaPost}>Enviar</button>
      </Form>
  </MainContainer>
)

}

export default App;
