import React from "react";
import {useNavigate} from 'react-router-dom'

function ListTripPage() {
  const navigate = useNavigate()
    return (
      <>
        <p>Lista de Viagens</p>
        <button onClick={() => navigate('/trips/application')}>Increva-se em uma viagem!</button>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default ListTripPage;