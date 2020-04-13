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
      operateType: 'add',
      isShow: false,
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sexLabel',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        }
      ],
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名'
        },
        {
          model: 'age',
          label: '年龄'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址'
        }
      ],
      searchFrom: {
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
