export default {
  state: {
    menuList: [], // 全部菜单
    curMenu: null // 点击选中的菜单
  },
  mutations: {
    // 点击 菜单之后 对应的tab 标签也要 进入 tabList 进行存放
    // 首页 不加入tabList
    getMenu(state, selectedMenu) {
      state.curMenu = selectedMenu
    }
  },
  actions: {},
  modules: {}
}
