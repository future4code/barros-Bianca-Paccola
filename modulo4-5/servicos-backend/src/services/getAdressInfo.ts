import axios from "axios";

async function getAdressInfo (cep: string) {
    try {
        const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
        return data;
    } catch (error: any) {
        throw new Error(error.message); 
    }
}

export default getAdressInfo;