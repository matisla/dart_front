<template>
    <div class="row">
        <div class="col"><CreateGame/></div>
        <div class="col"><GameList/></div>
    </div>
</template>

<script>

import CreateGame from "./Game/CreateGame"
import GameList from "./Game/GameList"

export default {
    name: "Home",
    components: {
        CreateGame,
        GameList
    }
}
</script>