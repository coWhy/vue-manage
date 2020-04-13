// 自定义开发插件
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  // axios.defaults.baseURL = process.env.VUE_APP_URL
  const service = axios.create({
    baseURL: process.env.VUE_APP_URL, //请求基础url
    timeout: 3000 //  请求超时时间
  })
  // 添加请求拦截器 token拦截
  service.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
    }
  )
  // 响应拦截器
  service.interceptors.response.use(
    response => {
      let res = {}
      //  此处对不同状态码 进行不同的操作
      res.status = response.status
      res.data = response.data
      return res
    },
    err => {}
  )
  Vue.prototype.$http = axios
}
export default MyHttpServer
