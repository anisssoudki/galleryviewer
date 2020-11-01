import axios from 'axios';


export default axios.create({
    baseURL:"https://api.unsplash.com",

    headers: {
        Authorization: 'Client-ID fDX3MfgrsE7geDrHNP_u9e-Ru3LenDOP7r2hWJj0SQ0'
            }

})