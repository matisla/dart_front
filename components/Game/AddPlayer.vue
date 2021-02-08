<template>
<div class="">
    <h2 class="text-center">Add Player</h2>
    <form class="row align-items-center" @submit="searchUsers">
        <FormulateInput type="text" 
            v-model="search"
            input-class="form-control"
            outer-class="col"
            placeholder="Search"
            validation="required"
        />
        <FormulateInput type="submit" 
            outer-class="col col-auto" 
            name="search"
            input-class="btn btn-primary"
        />
    </form>
    <div class="list-group">
        <div 
            v-for="user in users" v-bind:key="user.id"
            class="list-group-items d-flex justify-content-between"
            <strong>{{ user.username }}</strong>
            <span>{{ user.id }}</span>
            <a href="#add-user?userid=" class="btn btn-sm">add</a>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "AddPlayer",
    data () {
        return {
            search: "",
            users: [],
        }
    },
    computed: {
    },
    methods: {
        addUser () {
            this.$store.dispatch("GAME_ADD_USER", this.username)
        },
        searchUsers () {
            this.$store.dispatch("USER_SEARCH", this.search)
            .then( (resp, err) => {
                console.log(resp)
            })
        }
    }
}
</script>