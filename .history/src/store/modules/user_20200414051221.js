import cookie from 'js-cookie'
export default {
  state: {
    accessToken: ''
  },
  mutations: {
    setToken(state, accessToken) {
      state.accessToken = accessToken
    }
  },
  actions: {},
  modules: {}
}
