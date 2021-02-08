<template>
	<div class="d-flex justify-content-center">
		<div id="login" class="rounded border p-3 ">
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
					<div class="spinner-boarder" role="status" 
						v-if="authStatus == 'loading'"
						><span class="sr-only">Loading ...</span>
					</div>
					<router-link to="/account/create" class="" v-else>register</router-link>
					<button type="submit" class="btn btn-sm btn-primary"
						v-if="authStatus !== 'loading'"
						>login</button>
				</div>
			</form>
		</div>
	</div>
	
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: "Login",
	data () {
		return {
			username: "",
			password: ""
		}
	},
	computed: {
		
		...mapGetters(['isAuthenticated', 'authStatus'])
	},
	methods: {
		login () {
			const credentials = {
				'username': this.username,
				'password': this.password
			}
			this.$store.dispatch("AUTH_REQUEST", credentials).then(() => {
				this.$router.push('/')
			})
		}
	}

}
</script>
