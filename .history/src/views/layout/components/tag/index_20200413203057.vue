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
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
