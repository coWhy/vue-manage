<template>
  <el-container class="container">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header class="header">
        <common-header></common-header>
      </el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from './components/aside/index'
import CommonHeader from './components/header/index'
export default {
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
.header {
  background-color: #626e85; // 头部背景色
  width: 100%;
}
.main {
  padding-top: 0;
}
</style>
