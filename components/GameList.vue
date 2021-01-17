<template>
<div id="games">
	<h2 class="text-center">all Games</h2>
	<div class="toast show" v-for="game in games" role="alert" aria-live="assertive" aria-atomic="true">
		<div class="toast-header">
			<strong class="me-auto">{{ game.id }} - Best of {{ game.best_of }}</strong>
			<small>{{ game.created_on }}</small>
			<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
		</div>
		<div class="toast-body">
			<ScoreBoard :game_id="game.id"/>
			<a v-bind:href="'/game/' + game.id">join</a>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'

import { url } from '../utils/api.js'
import ScoreBoard from '../components/ScoreBoard.vue'

export default {
	name: 'GameList',
	components: {
		ScoreBoard
	},
	data () {
		return {
			games: [{"id" : 1, "best_of": 3}]
		}
	},
	mounted () {
		
		axios.get(url + '/games').then( (response) => {
			console.log('success: ', response)
		}, (response) => {
			console.log('error: ', reponse)
		})
		console.log("game mounted")
	}
}

</script>

<style>
</style>
