import cookie from 'js-cookie'
export default {
  state: {
    accessToken: ''
  },
  mutations: {
    // 保存token 使用
    setToken(state, accessToken) {
      state.accessToken = accessToken
      cookie.set('accessToken', accessToken)
    }
  },
  actions: {},
  modules: {}
}
