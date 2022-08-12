import React from "react";
import { useNavigate } from 'react-router-dom'
import { useRequestData } from '../../hook/useRequestData'
import { getTrips } from '../../constants/constants'
import { ListContainer, CardsContainer, CardViagem } from './styled'

function ListTripPage() {
  const navigate = useNavigate()
  const [listaViagens, isLoading, error] = useRequestData(getTrips)

  const renderList = listaViagens&&listaViagens.trips.map((viagem) => {
    return (
      <CardViagem key={viagem.id}>
        <p><strong>Nome: </strong> {viagem.name}</p>
        <p><strong>Descrição: </strong> {viagem.description}</p>
        <p><strong>Planeta: </strong> {viagem.planet}</p>
        <p><strong>Duração: </strong>{viagem.durationInDays}</p>
        <p><strong>Data: </strong>{viagem.date}</p>
      </CardViagem>
    )
  })
    return (
      <ListContainer>
        <h1>Lista de Viagens</h1>
        <button onClick={() => navigate('/trips/application')}>Increva-se em uma viagem!</button>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
        <CardsContainer>
          {isLoading && <h1>Carregando...</h1>}
          {!isLoading && error && <h1>{error}</h1>}
          {!isLoading && renderList && renderList}
          {renderList}
        </CardsContainer>
      </ListContainer>
    );
  }
  
  export default ListTripPage;