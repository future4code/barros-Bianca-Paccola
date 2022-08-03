import React, { useState } from 'react';
import GlobalStyle from './globalStyles'
import Card from './Components/Card';
import Matches from './Components/Matches'

function App() {
  let conteudo;
  const [boolean, setBoolean] = useState(false)

  function monstraMatches () {
    setBoolean(!boolean)
  }

  if(boolean){
    conteudo = <Matches
                  voltar={monstraMatches}
                />
  } else {
    conteudo = <Card
      monstraMatches = {monstraMatches}
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
