import { clear } from "@testing-library/user-event/dist/clear";
import axios from "axios";

export function PostCreateTrip(url,body, header){

    return (
        axios.post(url, body, header).then((response)=>{
            alert("Viagem criada com Sucesso!!!")
        }).catch((error)=>{
            alert("Atenção: Dados incorretos!!!")
            console.log(body)
        }) 
    )
}