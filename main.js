import Vue from 'vue'
import Vuex from 'vuex'

import VueFormulate from '@braid/vue-formulate'

import App from './App'


Vue.use(VueFormulate)


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
