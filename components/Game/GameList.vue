<template>
<div>
	<h2 class="text-center">All games</h2>
	<div class="d-flex justify-content-end">
		<button class="btn btn-primary" @click="reload">Reload</button>
	</div>
	<div class="d-flex justify-content-center">
		<div class="toast show" v-bind="games" v-for="game in games" role="alert" aria-live="assertive" aria-atomic="true">
			<div class="toast-header">
				<strong class="me-auto">{{ game.id }} - Best of {{ game.best_of }}</strong>
				<small>{{ game.created_on }}</small>
				<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
			</div>
			<div class="toast-body">
				<ScoreBoard :game_id="game.id"/>
				<router-link :to="{ name: 'game', params: { id: game.id } }">join</router-link>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import ScoreBoard from './ScoreBoard.vue'
import { mapGetters, mapState } from 'vuex'

export default {
	name: 'GameList',
	components: {
		ScoreBoard
	},
	computed: {
		...mapState(["games", "username"]),
		...mapGetters(["isAuthenticated"])
	},
	methods: {
		reload () {
			this.$store.dispatch("GAMES_REQUEST", this.username)
		}
	}
}

</script>

<style>
</style>
