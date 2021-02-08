import { instance } from "../../api/index.js"

const state = {
	profile: {id: Number, username: String},
	allUsers: []
}

const getters = {
	getProfile: state => state.profile,
	getAllUsers: state => state.allUsers,
}

const actions = {
	["USER_REQUEST"]: ({ commit, dispatch }, username) => {
		return new Promise((resolve, reject) => {
			
			instance.get('users/', {
				params: {"username__in": username}
			})
			.then( resp => {
				commit("USER_SUCCESS", resp.data)
				resolve(resp)
				dispatch("GAMES_REQUEST", username)
			})
			.catch(err => {
				commit("USER_ERROR", err)
				reject(err)
			})
		})
	},
	["USERS_REQUEST"]: ({ commit }) => {
		return new Promise((resolve, reject) => {
			
			instance.get('users/')
			.then( resp => {
				commit("USERS_SUCCESS", resp.data)
				resolve(resp)
			})
			.catch(err => {
				reject(err)
			})
		})
	},
	["USERS_SEARCH"]: ({}, search) => {
		return new Promise((resolve, reject) => {
			instance.get("users/", {
				params: {"username__icontains": search}
			})
			.then( resp => {
				resolve(resp)
			})
			.catch( err => {
				reject(err)
			})
		})
	}
}

const mutations = {
	["USER_SUCCESS"]: (state, resp) => {
		state.profile = resp.data	
	},
	["USERS_SUCCESS"]: (state, resp) => {
		state.allUsers = resp.data	
	},
	["USER_ERROR"]: state => {
		state.profile = {}
	},
}

export default {
	state,
	actions,
	mutations,
	getters
}
