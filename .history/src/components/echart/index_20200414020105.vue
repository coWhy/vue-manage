<template>
  <div style="height:100%" ref="echart"></div>
</template>

<script>
import echart from 'echarts'
export default {
  props: {
    // 父组件传递过来的信息
    chartData: {
      type: Object,
      default() {
        return {
          xData: [], // X轴数据
          series: []
        }
      }
    }
  },
  data() {
    return {
      echart: null,
      axisOption: {}, // 有坐标轴的
      normalOption: {} // 无坐标轴的
    }
  }
}
</script>

<style lang="scss" scoped></style>
