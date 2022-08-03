import axios from "axios";
import React, { useState, useEffect } from "react";
import { MatcheContainer } from "../style";

function Matches (props) {
    
    const [listaMatches, setlistaMatches] = useState([])
    
    
    const aluno = 'bianca-paccola-barros'
    function getMatches () {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`).then((response) => {
            return setlistaMatches(response.data.matches)
        }).catch((error) => {
            return alert('Erro ao carregar lista')
        })
    }
    
    useEffect(() => {
            getMatches()
        },[]
    )
    const lista = listaMatches.map((perfil) => {
        return (
            <ul> 
                <li>
                <img src={perfil.photo} alt={perfil.photo_alt}></img>
                <p>{perfil.name}</p>
                </li> 
            </ul>
        )
    })
    
    function zerarMatches () {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`).then(() => {
            alert("Matches zerados!!!")
        }).catch(() =>{
            alert('Algo saiu errado :( .. tente novamente!')
        })
    }

    return (
            <MatcheContainer>
                <h1>Seus Matches 💕</h1>
                <div>
                    <button onClick={props.voltar}>Voltar...</button>
                    <button onClick={zerarMatches}>Zerar Matches</button>
                </div>
                    {listaMatches > 0 && lista}
                    {listaMatches.length === 0 && <p>Você ainda não possui matches!!! 😥 <br />
                        Continue avaliando os perfis...</p>}
            </MatcheContainer>
    )
}

export default Matches;