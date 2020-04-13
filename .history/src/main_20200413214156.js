import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局配置样式
import '@/assets/scss/reset.scss'
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
// 第三方包
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

console.log(
  `当前所处开发环境:【${process.env.NODE_ENV}】| 路由为: 【${process.env.VUE_APP_URL}】`
)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
