<template>
  <el-container class="container">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/aside/index'
import Header from './components/header/index'
export default {
  components: {
    New
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
