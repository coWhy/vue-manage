<template>
  <div style="height:100%" ref="echart">Echart</div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    // 父组件传递过来的信息
    echartData: {
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
      axisOption: {
        xAxis: [
          {
            type: 'category',
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: []
      }, // 有坐标轴的
      normalOption: {
        series: []
      } // 无坐标轴的
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
      this.initChartData()
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
        this.axisOption.xAxis.data = this.echartData.xData
        this.axisOption.series = this.echartData.series
      } else {
        console.log('normalOption')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
