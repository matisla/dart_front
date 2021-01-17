<template>
	<div class="rounded border p-3">
		<h2 class="text-center">Create Game</h2>
		<form action="" class="" @submit="createGame()">
			<FormulateInput type="select"
				:options="{301: 301, 501: 501, 701: 701 }"
				input-class="form-select mb-3"
				v-model="points"
				label="points"
				validation="required"
				/>
			<FormulateInput type="select" 
				:options="{1:1, 3:3, 5:5, 7:7, 9:9}"
				input-class="form-select mb-3"
				v-model="best_of"
				label="Best of"
				validation="required"
				/>
			<FormulateInput type="select"
				:options="{single: 'single out', master: 'master out', double: 'double out'}"
				input-class="form-select mb-3"
				v-model="mode"
				label="Out"
				/>
		</form>
		<button class="btn btn-primary" @click="createGame()">create</button>
	</div>
</template>

<script>

export default {
	name: "CreateGame",
	data () {
		return {
			best_of: 3,
			points: 501,
			mode: "single",
		}
	},
	methods: {
		createGame () {
			console.log(this.best_of, this.points, this.mode)
			
		}
	}
}
</script>
