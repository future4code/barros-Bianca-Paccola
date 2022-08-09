import React from "react";
import {useNavigate} from 'react-router-dom'

function CreateTripPage() {
  const navigate = useNavigate()
    return (
      <>
        <p>Adicionar Viagem...</p>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default CreateTripPage;