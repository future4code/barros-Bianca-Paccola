import React from "react";
import {useNavigate} from 'react-router-dom'
import { HomeContainer } from "./styled";
import Galaxy from '../../images/pngwing.com.png'
import * as Coordinators from '../../Coordinators/Coordinators'

function HomePage() {
  const navigate = useNavigate();

  function goAdminHome (){
    if(sessionStorage.getItem("token")){
      Coordinators.goToTripListAdmin(navigate)
    } else {
      Coordinators.goToLogin(navigate)}
    }

    return (
      <HomeContainer>
         <img src={Galaxy} alt='imagem de galaxya' />
        <h1>Bem Vindos a LabeX!!! Sua plataforma de gerenciamento de viagens espaciais 🚀</h1>
        <div>
          <button onClick={() => Coordinators.goToTripsList(navigate)}>Lista de Viagens</button>
          <button onClick={goAdminHome}>Área de Admin</button>
        </div>
        <img src={Galaxy} alt='imagem de galaxya' />
      </HomeContainer>
    );
  }
  


  export default HomePage;