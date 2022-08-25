import React from "react";
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../../components/constants/constants";
import { useForm } from "../../components/hook/useForm"
import { PostCreateTrip } from "../../components/Axios/PostCreateTrip"
import { useProtectPage } from "../../components/hook/useProtectPage"
import { DateTrip } from "../../components/constants/Date"

function CreateTripPage() {
  useProtectPage()
  
  const navigate = useNavigate()
  let tripDate = DateTrip()
  console.log(tripDate)
  const [body, onChange, clear] = useForm({name: "", planet: "Júpiter", date: "", description: "", durationInDays: ""})

  function createTrip (event) {
    event.preventDefault()
    PostCreateTrip(`${BASE_URL}/trips`, body,  { 
      headers: {
        auth: localStorage.getItem("token")
    }
      })
      clear()
  }

    return (
      <>
        <h1>Adicionar Viagem...</h1>
        <button onClick={() => navigate(-1)}> 	&#8592; Voltar</button>
        <form onSubmit={createTrip}>
          <label htmlFor="name">Nome da Viagem: </label>
          <input
          type="text"
          minLength="5" 
          placeholder="Nome"
          id="name"
          name="name"
          required
          value={body.name}
          onChange={onChange}
          />

          <label htmlFor="planet">Planeta de destino: </label>
          <select
          id="planet"
          name="planet"
          value={body.planet}
          onChange={onChange}
          >
          <option value="Júpiter">Júpiter</option>
          <option value="Lua">Lua</option>
          <option value="Marte">Marte</option>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Netuno">Netuno</option>
          <option value="Plutão">Plutão</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Vênus">Vênus</option>
          </select>

          <label htmlFor="date">Data da viagem:</label>
          <input 
          type="date"
          placeholder="Data"
          id="date"
          name="date"
          min={tripDate}
          required
          value={body.date}
          onChange={onChange}  
          />

          <label htmlFor="description">Insira uma breve descrição: </label>
          <input 
          type="text"
          placeholder="Descrição da viagem"
          id="description"
          name="description"
          required
          value={body.description}
          onChange={onChange}
          />

          <label htmlFor="durationInDays">Duração em dias:</label>
          <input 
          type="number"
          min="50" 
          placeholder="Duração"
          id="durationInDays"
          name="durationInDays"
          required
          value={body.durationInDays}
          onChange={onChange}
          />
          <button type="submit">Criar Viagem!</button>
        </form>
      </>
    );
  }
  
  export default CreateTripPage;