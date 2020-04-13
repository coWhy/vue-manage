<template>
  <div style="height:100%" ref="echart"></div>
</template>

<script>
import echarts from 'echarts'
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
    },
    isAxisChart: {
      // 有轴还是无轴的 默认有轴
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      echart: null,
      axisOption: [
        {
          type: 'category',
          boundaryGap: false,
          data: []
        }
      ],

      // 有坐标轴的
      normalOption: {} // 无坐标轴的
    }
  },
  computed: {
    options() {
      // 选择有轴还是无轴
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  },
  methods: {
    initChart() {
      if (this.echart) {
        this.echart.setOption(this.options)
      } else {
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        console.log('isAxisChart')
      } else {
        console.log('normalOption')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
