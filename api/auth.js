import axios from 'axios'

const url = 'http://localhost:8000/api-auth/'

export default {
	
	login (credentials) {
		return axios.post(url + 'login', credentials)
			.then(resp => resp.data)
	}
}
