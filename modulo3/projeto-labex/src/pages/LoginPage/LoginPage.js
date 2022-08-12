import React from "react";
import {useNavigate} from 'react-router-dom'
import { Formulario } from "./styled";

function LoginPage() {
  const navigate = useNavigate()
    return (
      <>
        <h1>Login</h1>
        <Formulario>
          <input type='email' placeholder="E-mail"></input>
          <input type='password' placeholder="Senha"></input>
        </Formulario>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
        <button onClick={() => navigate('/admin/trips/list')}>Entrar</button>
      </>
    );
  }
  
  export default LoginPage;