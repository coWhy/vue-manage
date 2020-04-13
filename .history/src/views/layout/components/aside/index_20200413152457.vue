<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo menu"
      :background-color="asideBgColor"
      text-color="#fff"
      :active-text-color="asideActiveTextColor"
    >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideBgColor: '#343746', // 侧边栏背景颜色
      asideActiveTextColor: '#02aeff' // 选中字体的颜色
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
</style>
