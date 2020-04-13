<template>
  <div class="manage">
    <div class="manage-header"></div>
    <div class="manage-content"></div>
  </div>
</template>

<script>
import CommonTable from '@/components/table'
// import CommonForm from '@/components/form'
export default {
  components: {
    CommonTable
    // CommonForm
  }
}
</script>

<style lang="scss" scoped>
.manage {
  height: 90%;
  padding-bottom: 20px;
  overflow: hidden;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
}
</style>
