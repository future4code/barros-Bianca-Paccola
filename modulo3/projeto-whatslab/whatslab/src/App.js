import React from 'react';
import './App.js';
import './components/Cabecalho/Cabecalho'
import './components/Principal/Principal'
import './components/MensagemEnviada/MensagemEnviada'
import { Cabecalho } from './components/Cabecalho/Cabecalho';
import Principal from './components/Principal/Principal'
import { Rodape } from './components/Rodape/Rodape'



function App() {
  return (
    <div>
      <Cabecalho></Cabecalho>
      <Principal></Principal>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
