import axios from "axios"

export const instance = axios.create({
	baseURL: 'http://localhost:8000/api',
}) 

export const auth =  axios.create({
	baseURL: 'http://localhost:8000/api-auth-token',
	timeout: 2000
})
