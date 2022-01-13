import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedSteate from "vuex-persistedstate"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default new Vuex.Store({
  plugin:[
    createPersistedSteate(),
  ],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
