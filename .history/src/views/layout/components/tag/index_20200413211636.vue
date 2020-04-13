<template>
  <div class="tags">
    <!--  tabs标签 
  不是首页才可以关闭
  -->
    <el-tag
      size="small"
      :key="tag.name"
      v-for="tag in tagList"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name"
    >
      {{ tag.title }}
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
    return {}
  },
  methods: {
    ...mapMutations({
      closeTag: 'closeTag'
    }),
    // 关闭tag
    handleClose(tag) {
      this.closeTag(tag)
    },
    changeMenu(tag) {
      this.$store.commit('getMenu', tag)
      this.$router.push({ name: tag.name })
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
