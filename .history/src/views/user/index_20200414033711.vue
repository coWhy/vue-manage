<template>
  <div class="manage">
    <div class="manage-header">
      <!-- 增加按钮 -->
      <el-button type="primary">+新增</el-button>
      <!-- 搜索表单 -->
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table :tableData="tableData"></common-table>
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
      searchFrom: {
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: ''
        }
      ],
      tableData: []
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
