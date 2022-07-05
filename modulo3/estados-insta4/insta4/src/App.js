import React from 'react';
import Post from './components/Post/Post';
import './style.css'


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
  <div className='MainContainer'>
    {
      postagem.map((item)=> {
      return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost} />
    })
   }
  </div>
)

}


export default App;
