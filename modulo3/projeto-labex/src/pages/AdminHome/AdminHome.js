import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { CardsContainer, CardViagem } from "./styled";
import * as Coordinators from '../../Coordinators/Coordinators'
import { useRequestData } from '../../components/hook/useRequestData'
import { BASE_URL } from '../../components/constants/constants'

function AdminHome() {
  const navigate = useNavigate()
  const [listaViagens, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

  function handleClick(viagem) {
    localStorage.setItem('viagemId', viagem)
    Coordinators.goToTripDetails(navigate)
  }

  const renderList = listaViagens&&listaViagens.trips.map((viagem) => {
    return (
      <CardViagem key={viagem.id}>
          <p><strong>{viagem.name}</strong></p>
        <div>
          <button onClick={() => handleClick(viagem.id)}>Detalhes...</button>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/></svg>
        </div>
      </CardViagem>
    )
  })


    return (
      <>
        <p>Home Admin</p>
        <button onClick={() => Coordinators.goToTripsCreate(navigate)}>Criar Viagem</button>
        <button onClick={() => Coordinators.goToTripDetails(navigate)}>Detalhes da viagem</button>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
        <CardsContainer>
          {isLoading && <h1>Carregando...</h1>}
          {!isLoading && error && <h1>{error}</h1>}
          {!isLoading && renderList && renderList}
        </CardsContainer>
      </>
    );
  }
  
  export default AdminHome;