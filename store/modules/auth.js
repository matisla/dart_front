import { auth } from '../../api/index.js'

const state = {
	token: localStorage.getItem("user-token") || "",
	username: localStorage.getItem("user-username") || null,
	status: "initial",
}

const getters = {
	isAuthenticated: state => !!state.token,
	getUsername: state => state.username,
	authStatus: state => state.status,
}

const actions = {
	["AUTH_REQUEST"]: ({commit, dispatch}, user) => {

		return new Promise((resolve, reject) => {
			commit("AUTH_REQUEST")
			
			auth.post('', user)
			.then( resp => {
				const token = resp.data.token
				commit("AUTH_SUCCESS", {token: token, username: user.username})
				dispatch("USER_REQUEST", user.username)
				resolve(resp)
			})
			.catch(err => {
				commit("AUTH_ERROR", err)
				reject(err)
			})
		})
	},
	["AUTH_LOGOUT"]: ({ commit }) => {
		return new Promise(resolve => {
			commit("AUTH_LOGOUT")
			resolve()
		})
	}
}

const mutations = {
	["AUTH_REQUEST"]: state => {
		state.status = "loading"
	},
	["AUTH_SUCCESS"]: (state, data) => {
		state.status = "success"
		state.token = data.token
		localStorage.setItem('user-token', data.token) 
		localStorage.setItem('user-username', data.username) 
	},
	["AUTH_ERROR"]: state => {
		state.status = "fail"
		localStorage.removeItem('user-token') 
		localStorage.removeItem('user-username') 
	},
	["AUTH_LOGOUT"]: state => {
		state.status = "logout"
		state.token = ""
		localStorage.removeItem('user-token') 
		localStorage.removeItem('user-username') 
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}

