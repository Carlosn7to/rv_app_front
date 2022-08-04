import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: `http://v1.agerv.tote.local/api/`,
    headers: {
    }
})