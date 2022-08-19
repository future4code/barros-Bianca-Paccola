import React from "react";
import {useNavigate} from 'react-router-dom'
import Cards from "../../components/Cards/Cards";
import * as Coordinators from '../../Coordinators/Coordinators'

function AdminHome() {
  const navigate = useNavigate()
    return (
      <>
        <p>Home Admin</p>
        <button onClick={() => Coordinators.goToTripsCreate(navigate)}>Criar Viagem</button>
        <button onClick={() => Coordinators.goToTripDetails(navigate)}>Detalhes da viagem</button>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
        <Cards />
      </>
    );
  }
  
  export default AdminHome;