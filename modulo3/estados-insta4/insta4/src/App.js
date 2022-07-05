import React from 'react';
import Post from './components/Post/Post';
import './style.js'
import {MainContainer} from './style.js'
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

  const postagem = [
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
  ]

return(
  <MainContainer>
    <GlobalStyle/>
    {
      postagem.map((item)=> {
      return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost} />
    })
   }
  </MainContainer>
)

}


export default App;
