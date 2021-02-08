<template>
  <div class="">
      <div class="rounded border p-3">
          <div class="">
            <strong>{{ profile }}</strong>
          </div>
          <button class="btn btn-primary" @click="AUTH_LOGOUT">logout</button>
      </div>
      <h2 class="text-center">Games</h2>
      <div class="rounded border p-3">
      </div>
      <button @click="Reload"></button>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import GameList from './GameList.vue'

export default {
    components: { GameList },
    computed: {
        profile () { return this.$store.state.profile }
    },
    methods: {
        logout: (event) => {
            this.$store.dispatch("AUTH_LOGOUT")
        },
        ...mapActions(["AUTH_LOGOUT"])
    },
    created: () => {
        console.log(this.$store)
    }
}
</script>