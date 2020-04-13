<template>
  <el-row class="home">
    <el-col></el-col>
    <el-col></el-col>
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
