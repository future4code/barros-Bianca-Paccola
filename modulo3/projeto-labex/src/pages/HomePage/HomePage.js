import React from "react";
import {useNavigate} from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
    return (
      <>
        <h1>Bem Vindos a LabeX!!! Sua plataforma de gerenciamento de viagens espaciais 🚀</h1>
        <button onClick={() => navigate("/trips/list")}>Lista de Viagens</button>
        <button onClick={() => navigate("/login")}>Fazer Login</button>
      </>
    );
  }
  


  export default HomePage;