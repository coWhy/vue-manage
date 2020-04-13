import Vue from 'vue'
import VueRouter from 'vue-router'
//当我们重复点击路由导航菜单的时候控制台会报错，错误的缘由是因为 vue-router 版本太新 解决办法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/index')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/other/page1')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/other/page2')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
