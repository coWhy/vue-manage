export default {
  state: {
    menuList: [], // 全部菜单
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
