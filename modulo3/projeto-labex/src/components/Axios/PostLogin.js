import axios from "axios";
import { goToTripDetail, goToTripListAdmin } from "../../Coordinators/Coordinators";

export function PostLogin(url,body, navigate){

    return (
        axios.post(url, body).then((response)=>{
            goToTripListAdmin(navigate)
        }).catch((error)=>{
            alert("Atenção: Dados incorretos!!!")
        }) 
    )
}
