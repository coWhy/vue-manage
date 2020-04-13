<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        ref="form"
      ></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary" @click="getList(searchFrom.keyword)"
          >搜索</el-button
        >
      </common-form>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from '@/components/form'
import CommonTable from '@/components/table'
export default {
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      operateType: 'add', // 操作类型 默认添加  反之 更新
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
        // 设置分页
        page: 1,
        total: 30,
        loading: false // 加载条 true 打开 false 关闭
      },
      operateForm: {
        // 表单操作的字段
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      // 表单操作列
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
      // 查询条件
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
  },
  methods: {
    async getList(name = '') {
      this.config.loading = true
      // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
      name ? (this.config.page = 1) : ''
      let res = await this.$http.get('/user/getUser', {
        params: {
          page: this.config.page,
          name
        }
      })
      this.tableData = res.data.list.map(item => {
        item.sexLabel = item.sex === 0 ? '女' : '男'
        return item
      })
      this.config.total = res.data.count
      this.config.loading = false
    },
    addUser() {
      this.operateForm = {}
      this.operateType = 'add'
      this.isShow = true
    },
    editUser(row) {
      this.operateType = 'edit'
      this.isShow = true
      this.operateForm = row
    },
    async confirm() {
      if (this.operateType === 'edit') {
        let res = await this.$http.post('/user/edit', this.operateForm)
        console.log(res.data)
        this.isShow = false
        this.getList()
      } else {
        let res = this.$http.post('/user/add', this.operateForm)
        console.log(res.data)
        this.isShow = false
        this.getList()
      }
    },
    delUser(row) {
      this.$confirm('确定要删除吗?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          let id = row.id
          let res = await this.$http.get('/user/del', {
            params: {
              id
            }
          })
          console.log(res.data)
          this.$message.success('删除成功')
          this.getList()
        })
        .catch(() => {
          this.$message.info('已取消删除')
        })
    }
  },
  created() {
    this.getList()
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
