import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../components/hook/useRequestData";
import { BASE_URL } from "../../components/constants/constants";

function TripPageDetail() {
  const navigate = useNavigate();
  
  const [data, isLoading, error] = useRequestData(
    `${BASE_URL}/trip/${localStorage.getItem('viagemId')}`,
    { headers: { auth: localStorage.getItem("token") } }
  );

  console.log(data);

  return (
    <>
      <p>Detalhes da viagem...</p>
      <button onClick={() => navigate(-1)}> &#8592; Voltar</button>
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
    </>
  );
}

export default TripPageDetail;
