import React from "react";
import {useNavigate} from 'react-router-dom'
import { FormContainer, Formulario } from "./styled";

function ApplicationFormPage() {

  const navigate = useNavigate();

    return (
      <FormContainer>
        <h1>Inscreva-se para uma viagem !!!</h1>
        <Formulario>
        <select></select>
        <input type='text' placeholder="Nome"></input>
        <input type='number' placeholder="Idade"></input>
        <input type='text' placeholder="Texto de candidatura..."></input>
        <input type='text' placeholder="Profissão"></input>
        <select></select>
        </Formulario>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </FormContainer>
    );
  }
  
  export default ApplicationFormPage;