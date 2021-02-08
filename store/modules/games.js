
import { instance } from "../../api/index.js"

const state = {
	game: {},
	games: []
}

const getters = {
	getOpenGames: state => state.games,
}

const actions = {
	["GAMES_REQUEST"]: ({ commit, dispatch }, username) => {
		return new Promise((resolve, reject) => {
			
			instance.get('games/', {
				params: {
					"username": username, 
					"finished": false
			}
			})
			.then( resp => {
				commit("GAMES_SUCCESS", resp)
				resolve(resp)
			})
			.catch(err => {
				console.log(err)
				reject(err)
			})
		})
	},
	["GAME_REQUEST"]: ({ commit, dispatch }, game_id) => {
		return new Promise( (resolve, reject) => {

			instance.get("games/" + game_id)
			.then( resp => {
				commit("GAME_SUCCESS", resp.data)
				resolve(resp)
			})
			.catch( err => {
				reject(err)
			})
		})
	},
	["GAME_ADD_USER"]: ({ commit }, usernames ) => {
		return new Promise( (resolve, reject) => {

			console.log(usernames)

			instance.post("games/" + game_id, data={

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
	["GAME_SUCCESS"]: (state, resp) => {
		state.game = resp.data
	},
	["GAMES_SUCCESS"]: (state, resp) => {
		state.games = resp.data
	},
}

export default {
	state,
	getters,
	actions,
	mutations,
}
