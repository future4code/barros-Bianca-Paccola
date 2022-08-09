import React from "react";
import {useNavigate} from 'react-router-dom'

function AdminHome() {
  const navigate = useNavigate()
    return (
      <>
        <p>Home Admin</p>
        <button onClick={() => navigate('/admin/trips/create')}>Criar Lista</button>
        <button onClick={() => navigate('/admin/trips/:id')}>Detalhes da viagem</button>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default AdminHome;