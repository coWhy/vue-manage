<template>
  <header class="header">
    <div class="l-content">
      <!-- 折叠标签 可以折叠左侧菜单栏 折叠：fa fa-outdent 展开： fa fa-indent -->
      <i class="fa fa-outdent" aria-hidden="true"></i>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <!-- 用户头像 和 用户名 动态获取 -->
          <img :src="avatarImg" class="avatar" />
          <span class="name">{{ avatarName }}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {}
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
