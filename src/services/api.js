import axios from 'axios'

const api = axios.create({
    baseURL: 'https://react-drop-backend.herokuapp.com/'
});

export default api;