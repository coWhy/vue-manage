<template>
  <div style="height:100%" ref="echart"></div>
</template>

<script>
import echart from 'echarts'
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: {} // X轴数据
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
