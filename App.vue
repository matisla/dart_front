<template>
	<div class="">
		<NavBar/>
		<div class="container mt-3">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

import NavBar from './components/NavBar'

export default {
	name: 'App',
	components: {
		NavBar
	},
	computed: {
		...mapGetters(["isAuthenticated"])
	},
}
</script>

<style>
</style>
