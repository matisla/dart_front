import axios from 'axios'

const state = {
	profile: {}
}

const getters = {
	getProfile: state => state.profile,
}

const actions = {
	["USER_REQUEST"]: ({ commit, dispatch }) => {
		commit("USER_REQUEST")
	}
}

export default {
	state,
	mutations: {
			
	},
	actions: {
			
	},
	getters: {
			
	}
}
