<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :background-color="asideSetting.bgColor"
    :text-color="asideSetting.texteColor"
    :active-text-color="asideSetting.activeTextColor"
    :collapse="isCollapse"
  >
    <!-- 这是没有子级菜单的 
    handleClickMenu(item) 将选中的菜单元素存入store中的menu 用于tab使用
    由于 分两种情况 所以 下面两种 都需要加上handleClickMenu 事件
    v-for="item in noChildrenList" 遍历元素列表
    :index="item.path"  路由相关
    :key="item.title" 索引 避免重复
    -->
    <!-- noChildrenList -->
    <h3 v-show="isCollapse">后台</h3>
    <h3 v-show="!isCollapse">后台管理系统</h3>
    <el-menu-item
      :index="item.path"
      v-for="item in noChildrenList"
      :key="item.title"
      @click="handleClickMenu(item)"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
    <!-- hasChildrenList -->
    <el-submenu
      :index="item.title"
      v-for="item in hasChildrenList"
      :key="item.title"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="subItem in item.children"
          :key="subItem.title"
          @click="handleClickMenu(subItem)"
        >
          <i :class="subItem.icon"></i>
          <span slot="title">{{ subItem.title }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  computed: {
    noChildrenList() {
      // asideMenuList 没有 子级菜单 非动态获取
      // return this.asideMenuList.filter(item => !item.children)
      return this.menuList.filter(item => !item.children)
    },
    hasChildrenList() {
      // asideMenuList 有 子级菜单  非动态获取
      // return this.asideMenuList.filter(item => item.children)
      return this.menuList.filter(item => item.children)
    },
    // 取出vuex中的是否折叠isCollapse
    isCollapse() {
      return this.$store.state.tag.isCollapse
    },
    menuList() {
      // 动态 获取所有菜单
      return this.$store.state.tag.menuList
    }
  },
  data() {
    return {
      asideSetting: {
        bgColor: '#343746', // 侧边栏背景颜色
        activeTextColor: '#4ffffb', // 选中字体的颜色
        texteColor: '#fff' // 默认字体颜色
      }
      //侧边栏菜单列表 非动态获取
      // asideMenuList: [
      //   {
      //     path: '/',
      //     name: 'home',
      //     title: '首页',
      //     icon: 'el-icon-s-home'
      //   },
      //   {
      //     path: '/video',
      //     name: 'video',
      //     title: '视频管理',
      //     icon: 'el-icon-video-play'
      //   },
      //   {
      //     path: '/user',
      //     name: 'user',
      //     title: '用户管理',
      //     icon: 'el-icon-user'
      //   },
      //   {
      //     title: '其他',
      //     icon: 'el-icon-s-promotion',
      //     children: [
      //       {
      //         path: '/page1',
      //         name: 'page1',
      //         title: '页面1',
      //         icon: 'el-icon-setting'
      //       },
      //       {
      //         path: '/page2',
      //         name: 'page2',
      //         title: '页面2',
      //         icon: 'el-icon-setting'
      //       }
      //     ]
      //   }
      // ]
    }
  },
  methods: {
    // 选中菜单 传入store
    handleClickMenu(item) {
      // 跳转到指定的页面
      this.$router.push({ name: item.name })
      this.$store.commit('getMenu', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  // 菜单占满容器
  height: 100%;
  border: none;
  h3 {
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
}
// 折叠样式
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
