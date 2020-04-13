export default {
  state: {
    menuList: [], // 全部菜单
    curMenu: null // 点击选中的菜单
  },
  mutations: {
    getMenu(state, selectedMenu) {
      state.curMenu = selectedMenu
    }
  },
  actions: {},
  modules: {}
}
