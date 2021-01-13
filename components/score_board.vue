<template>
<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">                           
	<div class="toast-header">
		<strong class="me-auto">{{ game.id }} - Best of {{ game.best_of }}</strong>
		<small>{{ game.created_on }}</small>
		<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
	</div>
	<div class="toast-body">
		<score-board></score-board>
		<a href="/game/{{ game.id }}">join</a>
	</div>
</div>

</template>

<script>
export default {
  name: 'games',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
