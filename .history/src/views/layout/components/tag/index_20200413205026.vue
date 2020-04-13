<template>
  <div class="tags">
    <!--  tabs标签 
  不是首页才可以关闭
  -->
    <el-tag
      size="small"
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tagList: state => state.tag.tagList
    })
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    }
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
