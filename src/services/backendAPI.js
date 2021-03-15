import axios from 'axios';

const backendAPI = axios.create({
    baseURL: 'http://localhost:3333',
})

export default backendAPI;