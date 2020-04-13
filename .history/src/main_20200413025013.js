import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
console.log(
  `当前所处开发环境:【${process.env.NODE_ENV}】| 路由为: 【${process.env.VUE_APP_URL}】`
)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
