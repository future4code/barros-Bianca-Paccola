import React from "react";
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
    return (
      <>
        <p>Login Admin</p>
        <button onClick={() => navigate('/admin/trips/list')}>Entrar na Home Admin</button>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default LoginPage;