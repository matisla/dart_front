<template>
	<table class="table">
		<thead>
		<tr class="text-center">
			<th>Player</th>
			<th>Set</th>
			<th>Leg</th>
			<th>Score</th>
		</tr>
		</thead>
		<tbody>
		<tr class="text-center" v-for="player in users">
			<td class=text-left>{{ player }}</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		</tbody>
	</table>
</template>

<script>
export default {
  name: 'score-board',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
</style>
