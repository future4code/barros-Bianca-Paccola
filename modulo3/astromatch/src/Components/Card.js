import { React, useState, useEffect } from "react";
import axios from "axios";
import {CardContainer} from '../style'
import Like from './images/like.svg'
import Deslike from './images/deslike.svg'

function Card() {

    const [perfil, setPerfil] = useState([])
    const [foto, setFoto] = useState(undefined)

    useEffect(
        () => {
            profileChoose()
        },[]
    )


    const aluno = 'bianca-paccola-barros'
    

    function profileChoose ()  {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`).then((response) => {
            setPerfil(response.data.profile)
            setFoto(response.data.profile.photo)
            console.log(perfil.name)
        }).catch((error) => {
            console.log(error.data)
            console.log('erro')
        })

    }    

    return (
        <CardContainer back={foto}>
                <div>
                    <span />
                    <div>
                        <p>{perfil.name}, {perfil.age}</p>
                        <p>{perfil.bio}</p>
                    </div>
                </div>
            <section>
                <img src={Deslike} alt='logo deslike'></img>
                <img src={Like} alt='logo coração para dar like'></img>
            </section>
        </CardContainer>
    )
}

export default Card;