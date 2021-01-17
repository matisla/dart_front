<template>
<table class="table">
	<thead>
	<tr class="text-center">
		<th>Player</th>
		<th>Set</th>
		<th>Leg</th>
		<th>Score</th>
	</tr>
	</thead>
	<tbody>
	<tr class="text-center" v-for="player in game.players">
		<td class=text-left>{{ player }}</td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	</tbody>
</table>
</template>

<script>
import axios from 'axios'
import { url } from '../utils/api.js'
import store from '../store/store.js'

export default {
	props: {
		game_id: Number
	},
	store,
	name: "ScoreBoard",
	computed: {
		game () {
			return this.$store.getters.gameDetail(this.game_id)
		}
	}
}
</script>
