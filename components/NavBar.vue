<template>
<nav class="navbar navbar-dark">
	<div class="container-fluid">
		<a href="#" class="navbar-brand">Dart Ultimate</a>
		<Login/>
	</div>
</nav>
</template>

<script>
import Login from '../components/Login.vue'

export default {
	name: "NavBar",
	components: {
		Login
	}
}
</script>
