import React, { useState } from 'react';
import GlobalStyle from './globalStyles'
import Card from './Components/Card';
import Matches from './Components/Matches'

function App() {
  let conteudo;
  const [boolean, setBoolean] = useState(false)

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
