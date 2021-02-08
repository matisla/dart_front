<template>
<nav class="navbar navbar-dark bg-dark">
	<div class="container-fluid">
		<router-link to="/" class="navbar-brand">Dart Ultimate</router-link>
		<div class="d-flex justify-content-end">
			<strong>{{ username }}</strong>
			<button class="btn btn-primary" @click="AUTH_LOGOUT">Logout</button>
		</div>
	</div>
</nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	name: "NavBar",
	computed: {
		...mapState(["username"]),
	},
	methods: {
		...mapActions(["AUTH_LOGOUT"])
	}
}
</script>
