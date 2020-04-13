// 自定义开发插件
import axios from 'axios'
import { config } from 'vue/types/umd'

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
  Vue.prototype.$http = axios
}
export default MyHttpServer
