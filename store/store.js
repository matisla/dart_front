import Vue from 'vue'
import Vuex from 'vuex'

import games from './modules/games.js'
import users from './modules/users.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		games: games,
		users: users,
		auth: auth,
	}
})
