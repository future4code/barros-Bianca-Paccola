import axios from "axios";
import { goToTripDetail } from "../Coordinators/Coordinators";

export function PostLogin(url,body, navigate){

    return (
        axios.post(url, body).then((response)=>{
            goToTripDetail(navigate)
            console.log('foi')
        }).catch((error)=>{
            alert("Atenção: Dados incorretos!!!")
        }) 
    )
}
