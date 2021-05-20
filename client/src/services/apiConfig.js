import Axios from 'axios'

const JwtToken = localStorage.getItem('token') || null

let apiUrl

const apiUrls = {
    production: 'https://www.herokuapp.com/api',
    development: 'http://localhost:3001/api'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
// creating an Axios create object
const api = Axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `Bearer ${JwtToken}`,
        'Access-Control-Allow-Origin': '*'
    }
})

export default api