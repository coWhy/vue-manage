export default {
  state: {
    menuList: [],
    curMenu: null
  },
  mutations: {
    getMenu(state, val) {
      state.curMenu = val
    }
  },
  actions: {},
  modules: {}
}
