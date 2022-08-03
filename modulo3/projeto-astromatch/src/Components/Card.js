import { React, useState, useEffect } from "react";
import axios from "axios";
import {CardContainer} from '../style'
import Like from './images/like.svg'
import Deslike from './images/deslike.svg'
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
                <img src={Deslike} alt='logo deslike' onClick={darDeslike} />
                <img src={Like} alt='logo coração para dar like' onClick={darLike} />
            </section>
        </CardContainer>
    )
}

export default Card;