import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRequestData } from "../../components/hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";
import { CardCandidate, CardsContainer, CardViagem } from "./styled";
import { useProtectPage } from "../../components/hook/useProtectPage"
import { PutDecide } from "../../components/Axios/PutDecide";
import Header from "../../components/Header/Header"

function TripPageDetail() {
  useProtectPage()
  const navigate = useNavigate();
  const pathParams = useParams()
  const tripId = pathParams.id
  const [data, isLoading, error] = useRequestData(
    `${BASE_URL}/trip/${tripId}`,
    { headers: { auth: localStorage.getItem("token") } }
  );
  
  function toDecide (id, boolean) { 

      PutDecide(`${BASE_URL}/trips/${tripId}/candidates/${id}/decide`, 
      {
        approve: boolean
      }, 
      { headers: { auth: localStorage.getItem("token") } }
      ) 

  }
  

  const candidacies = data && data.trip.candidates.map((candidate)=>{
    return (
      <CardCandidate>
    <ul>
      <li key={candidate.id}><span>Nome: </span>{candidate.name}</li>
      <li><span>Profissão: </span>{candidate.profession}</li>
      <li><span>Idade: </span>{candidate.age}</li>
      <li><span>País: </span>{candidate.country}</li>
      <li><span>Texto de candidatura: </span>{candidate.applicationText}</li>
      <div>
        <button onClick={()=>toDecide(candidate.id, true)}>Aprovar</button>
        <button onClick={()=>toDecide(candidate.id, false)}>Reprovar</button>
      </div>
    </ul>
    </CardCandidate>
    )
  })

  const approveds = data && data.trip.approved.map((candidate)=>{
    return (
      <CardCandidate>
    <ul>
      <li key={candidate.id}><span>Nome: </span>{candidate.name}</li>
      <li><span>Profissão: </span>{candidate.profession}</li>
      <li><span>Idade: </span>{candidate.age}</li>
      <li><span>País: </span>{candidate.country}</li>
      <li><span>Texto de candidatura: </span>{candidate.applicationText}</li>
    </ul>
    </CardCandidate>
    )
  })

  return (
    <CardsContainer>
      <Header 
        titulo="Detalhes da viagem..."
      />
      <button onClick={() => navigate(-1)}> &#8592; Voltar</button>
      <CardViagem>
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>{error}</h1>}
      {!isLoading && data && (
        <>
          <h1>{data.trip.name}</h1>
          <p>{data.trip.planet}</p>
          <p>{data.trip.date}</p>
        </>
      )}
      </CardViagem>
    
    <h1>Canditatos Pendentes: </h1>
    {isLoading && <h1>Carregando...</h1>}
    {!isLoading && error && <h1>{error}</h1>}
    {!isLoading && data && data.trip.candidates.length === 0 && <p>Está viagem ainda não possui candidatos...</p>}
    {!isLoading && data && data.trip.candidates.length > 0 && candidacies}

    <h1>Canditatos Aprovados: </h1>
    {isLoading && <h1>Carregando...</h1>}
    {!isLoading && error && <h1>{error}</h1>}
    {!isLoading && data && data.trip.approved.length === 0 && <p>Está viagem ainda não possui candidatos aprovados...</p>}
    {!isLoading && data && data.trip.approved.length > 0 && approveds}

    </CardsContainer>
  );
}

export default TripPageDetail;
