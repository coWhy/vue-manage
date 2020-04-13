export default {
  state: {
    menuList: [],
    curMenu: null
  },
  mutations: {
    getMenu(state, selectedMenu) {
      state.curMenu = selectedMenu
    }
  },
  actions: {},
  modules: {}
}
