<template>
	<div class="d-flex justify-content-center">
		<div class="rounded border p-3 ">
			<h2 class="text-center">create account</h2>
			<form @submit.prevent="createAccount">
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
				<FormulateInput type="password"
					input-class="mb-3"
					v-model="password_confirm"
					validation="required"
					placeholder="password confirm"
					/>
				<div class="d-flex justify-content-between">
					<div class="spinner-boarder" role="status" 
						v-if="authStatus == 'loading'"
						><span class="sr-only">Loading ...</span>
					</div>
					<button type="submit" class="btn btn-sm btn-primary">create</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "CreateAccount",
	data () {
		return {
			username: "",
            password: "",
            password_confirm: ""
		}
	},
	methods: {
		createAccount () {
			const credentials = {
				'username': this.username,
                'password': this.password
			}
			this.$store.dispatch("AUTH_CREATE", credentials).then(() => {
				this.$router.push('/')
			})
		}
	}

}
</script>