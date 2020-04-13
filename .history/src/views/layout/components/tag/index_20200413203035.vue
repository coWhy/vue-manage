<template>
  <div class="tags">
    <!--  tabs标签 
  不是首页才可以关闭
  -->
    <el-tag
      class="tag"
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      effect="dark"
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
