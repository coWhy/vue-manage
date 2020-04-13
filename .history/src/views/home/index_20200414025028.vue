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
      <!-- 图表表格 -->
      <el-card shadow="hover" style="height:438px;margin-top:20px">
        <el-table :data="tableData">
          <el-table-column
            show-overflow-tooltip
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="16">
      <!-- 顶部  -->
      <div class="num">
        <el-card
          shadow="hover"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <!-- 图标部分 -->
          <i
            class="icon"
            :class="item.icon"
            :style="{ background: item.color }"
          ></i>
          <!-- 详情部分  -->
          <div class="detail">
            <p class="num">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 底部 -->
      <el-card shadow="hover">
        <!-- Echart 图表 -->
        <echart style="height:240px" :chartData="echartData.order"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <echart style="height:200px" :chartData="echartData.user"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height:200px" :chartData="echartData.video"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from '@/components/echart'
export default {
  components: {
    Echart
  },
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
          icon: 'fa fa-car',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 2234,
          icon: 'fa fa-briefcase',
          color: '#1d7cf3'
        },
        {
          name: '今日支付订单3',
          value: 3234,
          icon: 'fa fa-calculator',
          color: '#2ec7c9'
        },
        {
          name: '今日支付订单4',
          value: 4234,
          icon: 'fa fa-times',
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
      ],
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  methods: {
    async getTableData() {
      let res = await this.$http.get('/home/getData')
      res = res.data
      this.tableData = res.data.tableData
      // 订单折线图
      const order = res.data.orderData
      this.echartData.order.xData = order.date
      // 第一步取出series中的name部分——键名
      let keyArray = Object.keys(order.data[0])
      // 第二步，循环添加数据
      keyArray.forEach(key => {
        this.echartData.order.series.push({
          name: key === 'wechat' ? '小程序' : key,
          data: order.data.map(item => item[key]),
          type: 'line'
        })
      })
      // 用户柱状图
      this.echartData.user.xData = res.data.userData.map(item => item.date)
      this.echartData.user.series.push({
        name: '新增用户',
        data: res.data.userData.map(item => item.new),
        type: 'bar'
      })
      this.echartData.user.series.push({
        name: '活跃用户',
        data: res.data.userData.map(item => item.active),
        type: 'bar',
        barGap: 0
      })
      // 视频饼图
      this.echartData.video.series.push({
        data: res.data.videoData,
        type: 'pie'
      })
    }
  },
  created() {
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home';
</style>
