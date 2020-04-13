<template>
  <el-row class="home" :gutter="20">
    <!-- 左侧 -->
    <el-col :span="8">
      <!-- 用户信息描述 -->
      <el-card shadow="hover" style="height:290px">
        <!-- 头像部分 -->
        <div class="user">
          <img :src="userInfo.avatar" />
          <div class="userinfo">
            <p class="name">{{ userInfo.username }}</p>
            <p class="access">{{ userInfo.access }}</p>
          </div>
        </div>
        <!-- 登录后的相关信息描述 如ip 等-->
        <div class="login-info">
          <p>上次登录时间:<span>2020年4月13日</span></p>
          <p>上次登录地点:<span>江苏省常州市金坛区</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:438px;margin-top:20px"> </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="16">
      <!-- 顶部  -->
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name">
          <!-- 图标部分 -->
          <i class="icon" :class="item.icon"></i>
          <!-- 详情部分  -->
          <div class="detail">
            <p class="num">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 底部 -->
      <el-card shadow="hover">
        <!-- 图表 -->
        <div style="height:210px"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <div style="height:200px"></div>
        </el-card>
        <el-card shadow="hover">
          <div style="height:200px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      // 用户信息
      userInfo: {
        username: 'admin', // 用户名
        avatar: require('@/assets/images/user.jpg'), // 用户头像
        access: '超级管理员' // 登录权限
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'el-icon-success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 2234,
          icon: 'el-icon-success',
          color: '#2ec7c9'
        },
        {
          name: '今日支付订单3',
          value: 3234,
          icon: 'el-icon-success',
          color: '#2ec7c9'
        },
        {
          name: '今日支付订单4',
          value: 4234,
          icon: 'el-icon-success',
          color: '#2ec7c9'
        },
        {
          name: '今日支付订单5',
          value: 1234,
          icon: 'el-icon-success',
          color: '#2ec7c9'
        },
        {
          name: '今日支付订单6',
          value: 1234,
          icon: 'el-icon-success',
          color: '#2ec7c9'
        }
      ]
    }
  },
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
@import '~@/assets/scss/home';
</style>
