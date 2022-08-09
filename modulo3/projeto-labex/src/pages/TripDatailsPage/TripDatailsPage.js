import React from "react";
import {useNavigate} from 'react-router-dom'

function TripPageDetail() {
  const navigate = useNavigate()
    return (
      <>
        <p>Detalhes da viagem...</p>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default TripPageDetail;