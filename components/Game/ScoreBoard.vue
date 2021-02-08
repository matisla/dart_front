<template>
<table class="table">
	<thead>
	<tr class="text-center">
		<th></th>
		<th>Player</th>
		<th>Set</th>
		<th>Leg</th>
		<th>Score</th>
	</tr>
	</thead>
	<tbody>
		<tr class="text-center" v-for="user in users" v-bind:key="user.username">
			<td></td>
			<td class=text-left>{{ user.username }}</td>
			<td>{{ user.set }}</td>
			<td>{{ user.leg }}</td>
			<td>{{ user.score }}</td>
		</tr>
		<tr>
			<form action="">
				<td>></td>
				<td class="text-left">
					<FormulateInput type="text"
						value={{ selected_user.username }}
						readonly
					/>
				<td></td>
				<td></td>
				<td>
					<FormulateInput type="Number"
						validation="required"
					/>
					<FormulateInput type="Submit"
						label="submit"
					/>
				</td>
			</form>
		</tr>
	</tbody>
</table>
</template>

<script>
import { mapGetters } from 'vuex'
import FormulateInput from "@braid/vue-formulate"

export default {
	data: () => {
		return { 
			selected_user: {},
			users: []
		}
	},
	props: {
		game_id
	},
	name: "ScoreBoard",
	computed: {
		...mapGetters({games: "getGames"})

	}
}
</script>
