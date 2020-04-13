<template>
  <div class="tags">
    <!--  tabs标签 
  不是首页才可以关闭
  -->
    <el-tag
      class="tag"
      size="small"
      closable
      effect="dark"
      :disable-transitions="false"
      @close="handleClose()"
    >
    </el-tag>
  </div>
</template>

<script>
export default {
  methods: {
    // 关闭tag
    handleClose() {}
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background-color: #b5c6d6;
  position: relative;
  height: 42px;
  border: none;
  overflow: hidden;
  padding: 10px;
  .el-tag {
    padding-top: 1px;
    padding-bottom: 1px;
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
