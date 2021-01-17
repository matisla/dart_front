import axios from 'axios'
import { url } from '../../utils/api.js' 

const state = {
		token: localStorage.getItem("user-token") || "",
		status: "initial",
}

const getters = {
	isAuthenticated: state => !!state.token,
	authStatus: state => state.status,
}

const actions = {
	["AUTH_REQUEST"]: ({commit, dispatch}, user) => {
		return new Promise((resolve, reject) => {
			commit("AUTH_REQUEST")
			axios.post(url + "api/login", user)
			.then( resp => {
				axios.default.headers.common['Authorization'] = resp.token
				commit("AUTH_SUCCESS", resp)
				dispatch("USER_REQUEST")
				resolve(resp)
			})
			.catch(err => {
				axios.default.headers.common['Authorization'] = null
				commit("AUTH_ERROR", err)
				localStorage.removeItem("user-token")
				reject(err)
			})
				
		})
	},
	["AUTH_LOGOUT"]: ({ commit }) => {
		return new Promise(resolve => {
			axios.default.headers.common['Authorization'] = null
			commit("AUTH_LOGOUT")
			localStorage.removeItem("user-token")
			resolve()
		})
	}
}

const mutations = {
	["AUTH_REQUEST"]: state => {
		state.status = "loading"
	},
	["AUTH_SUCCESS"]: (state, resp) => {
		state.status = "success"
		state.token = resp.token
	},
	["AUTH_ERROR"]: state => {
		state.status = "fail"
	},
	["AUTH_LOGOUT"]: state => {
		state.status = "logout"
		state.token = ""
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}

