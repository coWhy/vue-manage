<template>
  <div class="manage">
    <div class="manage-header">
      <common-form inline :formLabel="formLabel"></common-form>
    </div>
    <div class="manage-content">
      <common-table></common-table>
    </div>
  </div>
</template>

<script>
import CommonTable from '@/components/table'
import CommonForm from '@/components/form'
export default {
  components: {
    CommonTable,
    CommonForm
  },
  data() {
    return {
      searchFrom:
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: ''
        }
      ]
    }
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
