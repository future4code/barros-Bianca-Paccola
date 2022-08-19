import React from "react";
import { useRequestData } from '../../components/hook/useRequestData'
import { BASE_URL } from '../../components/constants/constants'
import { CardsContainer, CardViagem } from './styled'

function Cards() {
  const [listaViagens, isLoading, error] = useRequestData(`${BASE_URL}/trips`)

  const renderList = listaViagens&&listaViagens.trips.map((viagem) => {
    return (
      <CardViagem key={viagem.id}>
        <p><strong>Nome: </strong> {viagem.name}</p>
        <p><strong>Planeta: </strong> {viagem.planet}</p>
        <p><strong>Data: </strong>{viagem.date}</p>
        <button>Remover</button>
      </CardViagem>
    )
  })

    return (
        <CardsContainer>
          {isLoading && <h1>Carregando...</h1>}
          {!isLoading && error && <h1>{error}</h1>}
          {!isLoading && renderList && renderList}
        </CardsContainer>
    );
  }
  
  export default Cards;