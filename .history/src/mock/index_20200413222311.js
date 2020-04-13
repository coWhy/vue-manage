import Mock from 'mockjs'
import homeApi from './home'
Mock.setup({
  timeout: '200-2000' // 设置延时 [200 - 2000ms]
})
// 首页相关
Mock.mock(/\/home\/getData/.)// /\/home\/getData/.