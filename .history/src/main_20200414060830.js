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
// 自定义全局插件
import http from '@/plugins/http' // 自定义全局axios
// 引入Mock 主要是用于前端模拟使用 使用时 记得注释掉
import './mock'

Vue.config.productionTip = false
Vue.use(http)
console.log(
  `当前所处开发环境:【${process.env.NODE_ENV}】| 路由为: 【${process.env.VUE_APP_URL}】`
)

router.beforeEach((to, from, next) => {
  // 防止刷新后vuex里丢失token
  store.commit('getToken')
  // 防止刷新后vuex里丢失标签列表tagList
  store.commit('getTagList')
  let token = store.state.user.token
  // 过滤登录页，防止死循环
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else {
    next()
  }
})

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
  // 加载动态菜单
  created() {
    store.commit('initMenuList', router)
  }
}).$mount('#app')
