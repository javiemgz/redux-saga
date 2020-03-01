import axios from 'axios'

const B_URL = 'http://omdbapi.com/?apikey=b7282e9c'

export const apiCall = ( url, data, headers, method) => axios ({
    method,
    url: B_URL+ url,
    data,
    headers
})