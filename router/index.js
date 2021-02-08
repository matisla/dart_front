import VueRouter from 'vue-router'
import Vue from "vue"

import Home from '../components/Home'
import GameDetail from '../components/Game/GameDetail'

import Account from './modules/Account';

import store from "../store"

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next("/account/login")
}

const baseRoutes = [
    {
      name: "home",
      path: '/',
      component: Home,
      beforeEnter: ifAuthenticated

    },
    {
      name: "game",
      path: "/games/:id",
      component: GameDetail,
      props: true
    }
] 

const routes = baseRoutes.concat(
    Account,
)

export default new VueRouter({
  mode: "history", 
  routes
})

