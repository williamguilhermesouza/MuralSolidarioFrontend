import axios from 'axios';

const BackendAPI = axios.create({
    baseURL: 'http://localhost:3333',
})

export default BackendAPI;