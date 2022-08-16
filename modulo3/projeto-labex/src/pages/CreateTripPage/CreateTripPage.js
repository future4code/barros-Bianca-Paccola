import React from "react";
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../hook/useRequestData";

function CreateTripPage() {
  const navigate = useNavigate()

  const [listaViagens] = useRequestData(`${BASE_URL}/trips`);
    return (
      <>
        <p>Adicionar Viagem...</p>
        <form>
        <select>
          {listaViagens &&
            listaViagens.trips.map((viagem) => {
              return <option key={viagem.id} value={viagem.name}>
                {viagem.name}
              </option>
            })}
        </select>
        <input type="text" placeholder="Nome" minlength="5" required></input>
        <input type="number" placeholder="Idade" required></input>
        <input type="text" placeholder="Texto de candidatura..." required></input>
        <input type="text" placeholder="Profissão" required></input>
        <select></select>
      </form>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
      </>
    );
  }
  
  export default CreateTripPage;