import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/rayandiniz/api/servico/mostrar',
});

export default api;