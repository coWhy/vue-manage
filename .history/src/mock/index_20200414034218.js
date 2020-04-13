import Mock from 'mockjs'
import homeApi from './home'
Mock.setup({
  timeout: '200-2000' // 设置延时 [200 - 2000ms]
})
// 首页相关
// 拦截 /home/getData
Mock.mock('/home/getData', 'get', homeApi.getStatisticalData) // /\/home\/getData/.
// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)
