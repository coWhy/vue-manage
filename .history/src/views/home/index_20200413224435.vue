<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧 -->
    <el-col :span="8">
      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>
      <el-card shadow="hover">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="16">
      <!-- 顶部  -->
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          鼠标悬浮时显示
        </el-card>
      </div>
      <!-- 底部 -->
      <div>
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    async getVideoData() {
      const res = await this.$http.get('/home/getData')
      console.log(res)
    }
  },
  created() {
    this.getVideoData()
  }
}
</script>

<style lang="scss" scoped>
@import url('~@/assets/scss/home.scss');
</style>
