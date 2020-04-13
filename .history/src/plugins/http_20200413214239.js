// 自定义开发插件
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
  Vue.prototype.$http = axios
}
export default MyHttpServer
