import React, { useState } from 'react';
import  './App.css';
import Etapa1 from './componentes/Etapa1'
import Etapa2 from './componentes/Etapa2'
import Etapa3 from './componentes/Etapa3'
import EtapaFinal from './componentes/EtapanFinal'

import { Container, BotaoProximaEtapa, Inicio } from './style';

function App() {
  const [select, setSelect] = useState('medio')
  const [telaInicial, setTelaInicial] = useState(true)
  const [finaliza, setFinaliza] = useState(false)

 const handleChange = (event) => {
    setSelect(event.target.value)
  }

  let conteudo;

  if (telaInicial) {
    conteudo = <Etapa1 select={select} opcao={handleChange}/>
  } else { 
      if(select === 'medio'){
        conteudo = <Etapa3 />
      } else if (select === 'superior') {
        conteudo = <Etapa2 />
      } else if (select === '') {
        conteudo = <EtapaFinal/>
      }
  }
 
const proximo = (e) => {
  e.preventDefault()
  setTelaInicial(false)
  console.log(select)
}

const proximoDois = (e) => {
  e.preventDefault()
  setSelect('')
  setFinaliza(true)
  console.log(select)
}

function recarrega () {
  window.location.reload(false);
}

  return (
    <Container>
      {conteudo}
      {telaInicial && <BotaoProximaEtapa onClick={proximo}>Próximo</BotaoProximaEtapa> }
      {!telaInicial && <BotaoProximaEtapa onClick={proximoDois} display={finaliza} >Próximo</BotaoProximaEtapa> } 
      {finaliza && <Inicio onClick={recarrega}>Inicio</Inicio>}
    </Container>
  );
}

export default App;
