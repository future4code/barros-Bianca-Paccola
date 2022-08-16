import React from "react";
import {useNavigate} from 'react-router-dom'
import { HomeContainer } from "./styled";
import Galaxy from '../../images/pngwing.com.png'

function HomePage() {
  const navigate = useNavigate();
    return (
      <HomeContainer>
         <img src={Galaxy} alt='imagem de galaxya' />
        <h1>Bem Vindos a LabeX!!! Sua plataforma de gerenciamento de viagens espaciais 🚀</h1>
        <div>
          <button onClick={() => navigate("/trips/list")}>Lista de Viagens</button>
          <button onClick={() => navigate("/login")}>Fazer Login</button>
        </div>
        <img src={Galaxy} alt='imagem de galaxya' />
      </HomeContainer>
    );
  }
  


  export default HomePage;