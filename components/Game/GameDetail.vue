<template>
    <div>
        <ScoreBoard :game_id="id"/>
        <AddPlayer/>
    </div>
</template>


<script>
import { mapGetters, mapState } from 'vuex'
import AddPlayer from "./AddPlayer"
import ScoreBoard from "./ScoreBoard"

export default {
    name: "Game",
    components: {
        AddPlayer,
        ScoreBoard
    },
    props: {
        id: null
    },
    computed: {
        ...mapGetters({
            game: "getGameDetail"
        }),
        ...mapState({users: "allUsers"})
    },
    mounted () {
        this.$store.dispatch("USERS_REQUEST")
    }

}
</script>