import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../components/hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";
import { CardCandidate, CardViagem } from "./styled";

function TripPageDetail() {
  const navigate = useNavigate();
  
  const [data, isLoading, error] = useRequestData(
    `${BASE_URL}/trip/${localStorage.getItem('viagemId')}`,
    { headers: { auth: localStorage.getItem("token") } }
  );

  const candidacies = data && data.trip.candidates.map((candidate)=>{
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
    <>
      <p>Detalhes da viagem...</p>
      <button onClick={() => navigate(-1)}> &#8592; Voltar</button>
      <CardViagem>
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>{error}</h1>}
      {!isLoading && data && (
        <ul>
          <li>{data.trip.name}</li>
          <li>{data.trip.description}</li>
          <li>{data.trip.planet}</li>
          <li>{data.trip.durationInDays}</li>
          <li>{data.trip.date}</li>
        </ul>
      )}
      </CardViagem>


    {isLoading && <h1>Carregando...</h1>}
    {!isLoading && error && <h1>{error}</h1>}
    {!isLoading && data && data.trip.candidates.length === 0 && <p>Está viagem ainda não possui candidatos...</p>}
    {!isLoading && data && data.trip.candidates.length > 0 && candidacies}

    </>
  );
}

export default TripPageDetail;
