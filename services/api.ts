import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: `https://v1.agerv.agetelecom.com.br/api/`,
    //baseURL: `http://localhost:8000/api/`,
    headers: {

    }
})