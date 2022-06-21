import foto from './img/foto.png'
import logo from './img/logo.svg'
import './App.css';

const mensagem = () => {
  alert("Boa noite!")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá!!! Eu sou a <span>Bianca !</span></h1>
        <img src={foto} alt='fotografia' id='foto'/>
        <h2>Estudante de desenvolvimento web.</h2>
        <h3>E este é meu primeiro contato com o React...</h3>
        <img src={logo} alt='logo do React' id='logo'/>
        <button onClick={mensagem} className='botao'>Clique Aqui!</button>
      </header>
    </div>
  );
}

export default App;
