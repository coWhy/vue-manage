<template>
  <div class="login-wrap">
    <el-form
      :model="form"
      class="login-form"
      label-position="top"
      label-width="80px"
    >
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item align="center">
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      let res = await this.$http.post('/permission/getMenu', this.form)
      res = res.data
      if (res.code === 20000) {
        this.$store.commit('clearMenuList') // 先清除菜单缓存
        this.$store.commit('setMenuList', res.data.menu)
        this.$store.commit('setToken', res.data.token)
        // Vuex执行获取动态菜单
        this.$store.commit('initMenuList', this.$router)
        // 跳转到首页
        this.$router.push({ name: 'home' })
      } else {
        this.$message.warning(res.data.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  /* 弹性布局 */
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  background-color: #fff;
  width: 300px;
  padding: 30px;
  /* 圆角 */
  border-radius: 5px;
}
.login-wrap .login-form .login-btn {
  width: 100%;
}
</style>
