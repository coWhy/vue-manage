<template>
  <header class="header">
    <div class="l-content">
      <!-- 折叠标签 可以折叠左侧菜单栏 -->
      <i class="fa fa-navicon"></i>
    </div>
    <div class="r-content"></div>
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
