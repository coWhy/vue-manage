<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  methods: {
  aync  getVideoData() {
      this.$http.get('/home/getData')
    }
  },
  created() {
    this.getVideoData()
  }
}
</script>

<style lang="scss" scoped></style>
