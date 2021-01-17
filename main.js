// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueFormulate from '@braid/vue-formulate'
import App from './App'


Vue.use(VueResource)
Vue.use(VueFormulate)


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
