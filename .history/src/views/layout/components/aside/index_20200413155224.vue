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
    <!-- noChildrenList -->
    <el-menu-item
      :index="item.name"
      v-for="(item, index) in noChildrenList"
      :key="index"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
    <!-- hasChildrenList -->
    <el-submenu
      :index="item.name"
      v-for="(item, index) in hasChildrenList"
      :key="index"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subIndex"
      >
        <template>{{ subItem.title }}</template>
        <el-menu-item :index="subItem.path">{{ subItem.title }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    noChildrenList() {
      // asideMenuList 没有 子级菜单
      return this.asideMenuList.filter(item => !item.children)
    },
    hasChildrenList() {
      // asideMenuList 有 子级菜单
      return this.asideMenuList.filter(item => item.children)
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
          title: '首页',
          icon: 'el-icon-s-home'
        },
        {
          path: '/video',
          name: 'video',
          title: '视频管理',
          icon: 'el-icon-video-play'
        },
        {
          path: '/user',
          name: 'user',
          title: '用户管理',
          icon: 'el-icon-user'
        },
        {
          title: '其他',
          icon: 'el-icon-s-promotion',
          children: [
            {
              path: '/page1',
              name: 'page1',
              title: '页面1',
              icon: 'el-icon-setting'
            },
            {
              path: '/page2',
              name: 'page2',
              title: '页面2',
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
