<template>
	<div id="login" class="rounded border p-3">
		<h2 class="text-center">login</h2>
		<form @submit.prevent="login">
			<FormulateInput type="text"
				input-class="mb-3"
				v-model="username"
				validation="required"
				placeholder="username"
				/>
			<FormulateInput type="password"
				input-class="mb-3"
				v-model="password"
				validation="required"
				placeholder="password"
				/>
			<div class="d-flex justify-content-between">
				<a href="/user/create">register</a>
				<button type="submit" class="btn btn-sm btn-primary">login</button>
			</div>
		</form>
	</div>
</template>

<script>
import store from '../store/store.js'
import { mapGetters } from 'vuex'

export default {
	name: "Login",
	store,
	data () {
		return {
			username: "",
			password: ""
		}
	},
	computed: {
		
		mapGetters(['isAuthenticated'])
	},
	methods: {
		login () {
			const { username, password} = this
			this.$store.dispatch(
				"AUTH_REQUEST", {username, password}
			).then(() => {
			})
		}
	}

}
</script>
