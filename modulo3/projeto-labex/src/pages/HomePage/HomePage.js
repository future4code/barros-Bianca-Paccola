import React from "react";
import {useNavigate} from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
    return (
      <>
        <p>Home Page</p>
        <button onClick={() => navigate("/trips/list")}>Ver viagens...</button>
        <button onClick={() => navigate("/login")}>Fazer Login</button>
      </>
    );
  }
  


  export default HomePage;