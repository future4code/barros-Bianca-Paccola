import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/Cardpequeno/CardPequeno';
import fotoPerfil from './imagens/bianca.png'
import logoSuper from './imagens/download.jfif'
import logoMicro from "./imagens/microvip.jfif"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Bianca Paccola" 
          descricao="Oi, eu sou a Bianca. Estudante de Desenvolvimento Web pela Labenu. Adoro estudar tecnologia, escutar músicas, ler livros e brincar com meus Pets."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className='smallcards'>
        <CardPequeno
          logo={"https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-4-1.png"}
          label={"E-mail: "}
          info={"bianca.paccola@gmail.com"}
        />  
        <CardPequeno
          logo={"https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-7-1.png"}
          label={"Endereço: "}
          info={"Sta Cruz do Rio Pardo/SP"}
        />  

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoSuper}
          nome="Supermercado Dias Moraes" 
          descricao="Auxiliar de Escritório." 
        />
        
        <CardGrande 
          imagem="https://movimentosdascidades.grupoccr.com.br/wp-content/uploads/2021/03/1200px-Grupo_CCR.svg.png" 
          nome="CCR Sp Vias" 
          descricao="Atendente de Caixa e Auxiliar de Tesouraria." 
        />
      </div>

      <div className="page-section-container">
        <h2>Cursos</h2>
        <CardGrande 
          imagem={logoMicro} 
          nome="Microvip" 
          descricao="Analista de Hardware e Rede." 
        />
        
        <CardGrande 
          imagem="https://leonardo-energy.org.br/wp-content/uploads/2017/07/LOGO-ETEC.jpg" 
          nome="ETEC" 
          descricao="Técnico em Serviços Jurídicos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://w7.pngwing.com/pngs/887/616/png-transparent-linkedin-icon-linkedin-text-rectangle-logo-thumbnail.png" 
          texto="Linkedin" 
          link="https://www.linkedin.com/in/bianca-paccola-34a47b164/"
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2019/08/github-logo-icon.png" 
          texto="Github" 
          link="https://github.com/BiancaPaccola"
        />        
      </div>
    </div>
  );
}

export default App;
