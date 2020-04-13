<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  created() {
    this.$http.get('/home/getData')
  }
}
</script>

<style lang="scss" scoped></style>
