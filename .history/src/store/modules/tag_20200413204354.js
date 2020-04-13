export default {
  state: {
    menuList: [], // 全部菜单
    curMenu: null, // 点击选中的菜单
    tagList: [] // 存放tags 点击后 就存到里面去
  },
  mutations: {
    // 点击 菜单之后 对应的tab 标签也要 进入 tabList 进行存放
    // 首页 不加入tabList
    getMenu(state, selectedMenu) {
      if (selectedMenu.name !== 'home') {
        state.curMenu = selectedMenu
        let result = state.tagList.findIndex(
          item => item.name != selectedMenu.name
        )
      } else {
        state.curMenu = null
      }
    },
    // 关闭选中的tag
    closeTag(state, selectedTag) {}
  },
  actions: {},
  modules: {}
}
