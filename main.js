import Vue from 'vue'

import VueFormulate from '@braid/vue-formulate'

import App from './App'
import store from './store/index.js'
import router from './router/index.js'

Vue.use(VueFormulate)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
