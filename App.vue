<template>
	<div class="">
		<h1 class="text-center">Dart Ultimate</h1>
		<div class="row">
			<div class="col">
				<div class="row">
					<div class="col col-4"><CreateGame/></div>
					<div class="col col-8"><GameList/></div>
				</div>
			</div>
			<div class="col col-auto m-1"><Login/></div>
		</div>
	</div>
</template>

<script>
import GameList from './components/GameList.vue'
import CreateGame from './components/CreateGame.vue'
import Login from './components/Login.vue'


export default {
	name: 'App',
	components: {
		GameList,
		CreateGame,
		Login
	},
	mounted () {
	}
}
</script>

<style>
</style>
