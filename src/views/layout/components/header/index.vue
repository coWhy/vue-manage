<template>
  <header class="header">
    <div class="l-content">
      <!-- 折叠标签 可以折叠左侧菜单栏 折叠：fa fa-outdent 展开： fa fa-indent -->
      <i
        :class="
          $store.state.tag.isCollapse === true
            ? 'fa fa-indent'
            : 'fa fa-outdent '
        "
        aria-hidden="true"
        @click="collapseAsideMenu()"
      ></i>
      <!-- 面包屑导航 -->
      <el-breadcrumb separator="/">
        <!-- 默认保留一个 首页 -->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- curMenu 不为null的时候才渲染出来 -->
        <el-breadcrumb-item :to="curMenu.path" v-if="curMenu">
          {{ curMenu.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 用户部分 头像 下拉菜单 等 -->
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <!-- 用户头像 和 用户名 动态获取 -->
          <img :src="userInfo.avatar" class="avatar" />
          <span class="name">{{ userInfo.username }}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      curMenu: state => state.tag.curMenu // 选中的菜单对象
    })
  },
  data() {
    return {
      // 用户信息
      userInfo: {
        username: 'admin', // 用户名
        avatar: require('@/assets/images/user.jpg') // 用户头像
      }
    }
  },
  methods: {
    // 折叠左侧菜单栏
    collapseAsideMenu() {
      this.$store.commit('collapseAsideMenu')
    },
    // 退出登录
    logout() {
      this.$store.commit('clearToken')
      this.$store.commit('clearMenuList')
      // location.reload()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  // width: 380;
  display: flex;
  align-items: center;
  i {
    margin-right: 20px;
  }
  justify-content: space-between;
}
.r-content {
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .name {
    display: flex;
    height: 100%;
    color: black;
    font-weight: bolder;
    align-items: center;
  }
}
</style>
<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #b9d0fb;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #ffffff;
      font-weight: bolder;
    }
  }
}
</style>
