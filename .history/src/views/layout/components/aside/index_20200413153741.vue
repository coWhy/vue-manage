<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :background-color="asideSetting.bgColor"
    :text-color="asideSetting.texteColor"
    :active-text-color="asideSetting.activeTextColor"
  >
    <!-- 这是没有子级菜单的 
    handleClickMenu(item) 将选中的菜单元素存入store中的menu 用于tab使用
    由于 分两种情况 所以 下面两种 都需要加上handleClickMenu 事件
    -->
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    noChildernMenuList() {
      return this.asideMenuList.filter(item => !item.children)
    }
  },
  data() {
    return {
      asideSetting: {
        bgColor: '#343746', // 侧边栏背景颜色
        activeTextColor: '#02aeff', // 选中字体的颜色
        texteColor: '#fff' // 默认字体颜色
      },
      //侧边栏菜单列表
      asideMenuList: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 'el-icon-s-home'
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理',
          icon: 'el-icon-video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'el-icon-user'
        },
        {
          label: '其他',
          icon: 'el-icon-s-promotion',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'el-icon-setting'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'el-icon-setting'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  // 菜单占满容器
  height: 100%;
  border: none;
}
</style>
