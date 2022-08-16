import React from "react";
import axios from "axios";

export function usePostLogin (url,body) {
    return axios.post(url, body).then((response) => {
        console.log('deu certo')
        console.log(response);
    }).catch((error) =>{
        console.log('não deu');
        console.log(error);
    })
}