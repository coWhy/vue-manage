<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  methods: {
    async getVideoData() {
      await this.$http.get('/home/getData')
    }
  },
  created() {
    this.getVideoData()
  }
}
</script>

<style lang="scss" scoped></style>
