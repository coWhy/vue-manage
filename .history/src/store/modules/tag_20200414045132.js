import cookie from 'js-cookie'
export default {
  state: {
    isCollapse: false, // 左侧菜单栏是否折叠
    curMenu: null, // 点击选中的菜单
    menuList: [], // 全部菜单
    tagList: [
      // 首页是不可关闭的
      {
        path: '/',
        name: 'home',
        title: '首页',
        icon: 'el-icon-s-home'
      }
    ] // 存放tags 点击后 就存到里面去
  },
  mutations: {
    // 点击 菜单之后 对应的tab 标签也要 进入 tabList 进行存放
    // 首页 不加入tabList
    getMenu(state, selectedMenu) {
      if (selectedMenu.name !== 'home') {
        state.curMenu = selectedMenu
        let result = state.tagList.findIndex(
          item => item.name === selectedMenu.name
        )
        if (result === -1) {
          // 没找到这个tag 就放进tagList
          state.tagList.push(selectedMenu)
        }
      } else {
        state.curMenu = null
      }
    },
    // 关闭选中的tag
    closeTag(state, selectedTag) {
      // if (selectedTag.name !== 'home') {
      // }
      // 找到tag的索引 进行删除
      let result = state.tagList.findIndex(
        item => item.name === selectedTag.name
      )
      state.tagList.splice(result, 1)
    },
    // 折叠左侧菜单栏
    collapseAsideMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    // 保存动态获取的菜单列表
    setMenuList(state, dynamicMenus) {
      state.menuList = dynamicMenus
      // 将菜单存放到cookie
      cookie.set('dynamicMenuList', JSON.stringify(dynamicMenus))
      console.log('Vuex->正在保存动态获取的菜单列表:', dynamicMenus)
    },
    // 清除菜单列表 退出登录之后 就清除
    clearMenuList(state) {
      state.menuList = []
      cookie.remove('dynamicMenuList')
    },
    //初始化动态菜单
    initMenuList(srate, router) {
      let menuList = cookie.get('dynamicMenuList')
      if (!menuList) {
        // 不存在 就不执行 后续操作
        return
      }
      // 此处避免刷新页面时候 数据丢失
      srate.menuList = menuList

      let curMenuList = [
        {
          path: '/',
          component: () => import('@/views/layout/index'),
          children: []
        }
      ]
      menuList.forEach(item => {
        // 先判断有没有子路由
        if (item.children) {
          // 有子路由
          item.children = item.children.map(item => {
            //   例子： component: () => import('@/views/home/index')
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          curMenuList[0].children.push(...item.children) // 进行赋值
        } else {
          //没有子路由
          item.component = () => import(`@/views/${item.url}`)
          curMenuList[0].children.push(...item.children)
        }
      })
    }
  },
  actions: {},
  modules: {}
}
