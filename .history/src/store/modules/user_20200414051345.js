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
    },
    //清除token 退出时候使用
    clearToken(state) {
      state.accessToken = ''
      cookie.remove('accessToken')
    }
  },
  actions: {},
  modules: {}
}
