// 自定义开发插件
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  // axios.defaults.baseURL = process.env.VUE_APP_URL
  axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 3000 //  请求超时时间
  })
  Vue.prototype.$http = axios
}
export default MyHttpServer