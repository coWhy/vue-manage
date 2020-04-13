<template>
  <el-container class="container">
    <!-- 左侧菜单栏 -->
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header class="header">
        <common-header></common-header>
      </el-header>
      <!-- Tab标签 -->
      <common-tab class="tab"></common-tab>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
