import axios from "axios";
import React from "react";
export function DeleteTrip (url,header){

    return (
            axios.delete(url, header).then(()=>{
                alert("Viagem DELETADA com Sucesso!!!")
            }).catch(()=>{
                alert("Houve algum erro ao tentar processar sua requisição... Atualize a página e tente novamente...")
            }) 
    )
}