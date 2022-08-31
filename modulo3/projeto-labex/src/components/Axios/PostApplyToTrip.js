import axios from "axios";

export function PostApplyToTrip(url,body){

    return (
        axios.post(url, body).then((response)=>{
            alert("Dados Enviados com sucesso!!! Boa sorte!!!")
            console.log('foi')
        }).catch((error)=>{
            alert("Atenção: Dados incorretos!!!")
        }) 
    )
}
