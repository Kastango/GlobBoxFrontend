import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-selfless.herokuapp.com',
});

export default api;