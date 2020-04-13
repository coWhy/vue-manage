export default {
  state: {
    menuList: [], // 全部菜单
    curMenu: null // 点击的菜单
  },
  mutations: {
    getMenu(state, selectedMenu) {
      state.curMenu = selectedMenu
    }
  },
  actions: {},
  modules: {}
}
