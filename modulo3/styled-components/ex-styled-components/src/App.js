import './App.js';
import './components/Cabecalho/Cabecalho'
import './components/Principal/Principal'
import { Cabecalho } from './components/Cabecalho/Cabecalho';
import { Principal } from './components/Principal/Principal'
import { Rodape } from './components/Rodape/Rodape'



function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Principal></Principal>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
