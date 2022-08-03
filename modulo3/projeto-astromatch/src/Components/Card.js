import { React, useState, useEffect } from "react";
import axios from "axios";
import {CardContainer} from '../style'
import MatchIcon from './images/matchesicon.svg'

function Card(props) {

    const [perfil, setPerfil] = useState([])
    const [foto, setFoto] = useState(undefined)
    const [id, setId] = useState(undefined)
    
    const aluno = 'bianca-paccola-barros'

    useEffect(
        () => {
            profileChoose()
        },[]
    )

//Request para sortear perfis...
    function profileChoose ()  {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`).then((response) => {
            setPerfil(response.data.profile)
            setFoto(response.data.profile.photo)
            setId(response.data.profile.id)
        }).catch((error) => {
            console.log(error.data)
        })
    }    

//Request para dar like...
function darLike(){
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, {
        id: id,
        choice: true
    }).then((response) => {
        profileChoose () 
    }).catch((error) => {
        console.log(id)
    })
}

//Request para dar deslike...
function darDeslike(){
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, {
        id: id,
        choice: false
    }).then((response) => {
        profileChoose () 
    }).catch((error) => {
        console.log('não foi')
    })
}

    return (
        <CardContainer back={foto}>
            <img src={MatchIcon} alt='icone de matches' onClick={props.monstraMatches}></img>
                <section>
                    <span />
                    <div>
                        <p>{perfil.name}, {perfil.age}</p>
                        <p>{perfil.bio}</p>
                    </div>
                </section>
            <section>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M5 31.6q-1.15 0-2.075-.925Q2 29.75 2 28.6v-4.1q0-.55.125-1.275.125-.725.375-1.275l5.8-13.4q.45-1.05 1.475-1.8Q10.8 6 11.95 6H35.3v25.6L21.4 46l-1.65-1.3q-.55-.4-.725-.9-.175-.5-.175-1.15v-.5L21.1 31.6Zm33.3 0V6H44v25.6Z" onClick={darDeslike}/></svg>

                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M36.5 34v-6.5H30v-3h6.5V18h3v6.5H46v3h-6.5V34ZM22 42l-6.35-5.7q-3.6-3.25-6.175-5.8-2.575-2.55-4.25-4.8-1.675-2.25-2.45-4.35Q2 19.25 2 16.95q0-4.7 3.15-7.825T13 6q2.6 0 4.95 1.075T22 10.15q1.7-2 4.05-3.075Q28.4 6 31 6q4.25 0 7.125 2.575T41.7 14.6q-.9-.35-1.8-.525-.9-.175-1.75-.175-5.05 0-8.6 3.525T26 26q0 2.6 1.05 4.925Q28.1 33.25 30 34.9q-.95.85-2.475 2.175Q26 38.4 24.9 39.4Z" onClick={darLike}/></svg>
            </section>
        </CardContainer>
    )
}

export default Card;