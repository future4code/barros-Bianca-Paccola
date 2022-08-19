import React from "react";
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../../components/constants/constants";
import { useRequestData } from "../../components/hook/useRequestData";

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