import axios from "axios";
import { useEffect, useState } from "react";

export function PutDecide (url,body,header){

    return (

        axios.put(url, body, header).then(()=>{
            if(body.approve === true){
                alert("Candidato aprovado!")
            } else {
                alert("Candidato Reprovado")
            }
            // setReload(!reload)
        }).catch(()=>{
            alert("Oops... Houve algum erro na sua requisição... Tente novamente!")
        }) 
    )
}