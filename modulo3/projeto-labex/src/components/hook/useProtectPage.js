import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import * as Coordinators from "../../Coordinators/Coordinators"

export function useProtectPage () {
    const navigate = useNavigate()
    const token = sessionStorage.getItem("token")
    
    useEffect(()=>{
        if(!token){ Coordinators.goToLogin(navigate) }
    }, [token])
}