import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key:'bca07f6952d76ebe9c27317157ba1635',
        language: 'pt-BR',
        page: 1
    }
})

export default api


