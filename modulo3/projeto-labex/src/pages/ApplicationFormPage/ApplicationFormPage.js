import React from "react";
import {useNavigate} from 'react-router-dom'

function ApplicationFormPage() {

  const navigate = useNavigate();

    return (
      <>
        <p>Formulário</p>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default ApplicationFormPage;