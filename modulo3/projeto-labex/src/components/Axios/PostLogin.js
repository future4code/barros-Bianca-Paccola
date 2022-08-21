import axios from "axios";
import { goToTripListAdmin } from "../../Coordinators/Coordinators";

export function PostLogin(url,body, navigate){

    return (
        axios.post(url, body).then((response)=>{
            goToTripListAdmin(navigate)
            localStorage.setItem('token', response.data.token)
        }).catch((error)=>{
            alert(`Atenção: Dados incorretos!!! ${error}`)
        }) 
    )
}
