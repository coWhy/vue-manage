import Vue from 'vue'
import Vuex from 'vuex'
import tag from './modules/tag'
// import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tag
    // user
  }
})
