import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
                     <Post
            nomeUsuario={'aninha'}
            fotoUsuario={'https://picsum.photos/id/239/50/50'}
            fotoPost={'https://picsum.photos/id/237/200/150'}
          />
                     <Post
            nomeUsuario={'juninho'}
            fotoUsuario={'https://picsum.photos/id/238/50/50'}
            fotoPost={'https://picsum.photos/id/236/200/150'}
          />
  </div>
)

}


export default App;
