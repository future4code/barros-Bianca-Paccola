import React, { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, header) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() =>{
        setIsLoading(true)
        axios.get(url, header).then(response => {
            setData(response.data)
            setIsLoading(false)
            console.log("foi")
        }).catch(error => {
            setIsLoading(false)
            setError(error)
            console.log("Não foi")
        })
    }, [] )

    return [data, isLoading, error];
}