import React, { useEffect, useState } from 'react';
import axios from "axios";
import GlobalStyle from './globalStyles'
import Card from './Components/Card';
import Matches from './Components/Matches'

function App() {
  let conteudo;
  const [boolean, setBoolean] = useState(false)
  const [qtdeMatches, setQtdeMatches] = useState([])
  const [contador, setContador] = useState(qtdeMatches.length)

//Função callback que pega informação passada do filho para o pai para compartilhar com outro componente
function matches () {
  const aluno = 'bianca-paccola-barros'
  axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`).then((response) => {
    setQtdeMatches(response.data.matches)
    setContador(qtdeMatches.length)
}).catch(() => {
    setQtdeMatches([])
})
}

useEffect(()=>{
  matches()
})

//Renderização condicional
  function mostraMatches () {
    setBoolean(!boolean)
  }

  if(boolean){
    conteudo = <Matches
                  voltar={mostraMatches}
                />
  } else {
    conteudo = <Card
      mostraMatches = {mostraMatches}
      quantidadeMatches={contador}
    />
  }

  return (
    <div>
      <GlobalStyle />
      {conteudo}
    </div>
  );
}

export default App;
