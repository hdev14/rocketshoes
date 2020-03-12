import axios from 'axios';

const api = axios.create({
  urlBase: 'http://localhost:3333',
});

export default api;
