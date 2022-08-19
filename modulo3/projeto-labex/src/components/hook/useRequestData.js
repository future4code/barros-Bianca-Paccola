import React, { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url) {
    const [listaViagens, setListaViagens] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() =>{
        setIsLoading(true)
        axios.get(url).then(response => {
            setListaViagens(response.data)
            setIsLoading(false)
        }).catch(error => {
            setIsLoading(false)
            setError(error)
        })
    }, [] )

    return [listaViagens, isLoading, error];
}