import React, { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, header) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [reload, setReload] = useState(true)

    useEffect(() =>{
        setIsLoading(true)
        axios.get(url, header).then(response => {
            setData(response.data)
            setIsLoading(false)
        }).catch(error => {
            setIsLoading(false)
            setError(error)
        })
    }, [reload] )

    return [data, isLoading, error, reload, setReload];
}