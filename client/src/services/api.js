import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:5000'
})

// fetch status

export const fetchMessage = () => API.get('/')

//auth

export const createNewUser = (data) => API.post('/api/auth/signup', data)

export const getUser = (data) => API.post('/api/auth/login', data)


// campaign

export const getAllCampaigns = () => API.get('/api/campaign')

export const searchCampaign = (params) => API.get('/api/campaign/search', {params})

export const createCampaign = (data) => API.post('/api/campaign/create-campaign', data)

export const getImage = (imagePath) => `http://localhost:5000${imagePath}`;

export const getCamapignById = (id) => API.get(`/api/campaign/${id}`);