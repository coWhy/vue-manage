#### 0.指令

```text
  yarn install 下载包
  yarn serve 启动
  yarn build 打包
  yarn init eslint修复
  初始化用户 admin 111222
  在permission.js 中可以看到相关mock信息
```

#### 1.配置 eslint

> 1. 配置 .eslintrc.js rules 里面加上规则<br>

```js
  // 自定义规则
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 单引号
        semi: false // 不要分号
        // printWidth: 160 //换行
      }
    ]
```

#### 2.遇到的问题

> 当我们重复点击路由导航菜单的时候控制台会报错，错误的缘由是因为 vue-router 版本太新
> 解决办法:<br>
> 1 直接降低 vue-router 到 3x，重新重新安装 vue-router<br>

```text
 npm i vue-router@3.0 -S
```

> 2 在路由配置文件中加入以下代码可以直接解决

```js
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```

> node-sass 网络太慢解决办法<br>

```
npm :
      npm config set registry http://registry.npm.taobao.org
yarn:
      yarn config set registry http://registry.npm.taobao.org
只指定node-sass的下载源：
npm :
      npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
yarn:
      yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
```

#### 3 开始起步

> 设置全局样式变量 @/assets/scss/\_variable.scss<br>

```css
// 全局配置样式 修改主题颜色
$theme-color: #33aef0;
```

> main.js 中引入全局样式文件 @/assets/scss/reset.scss<br>

```js
import '@/assets/scss/reset.scss'
```

> vue.config.js 配置支持 scss 引入全局文件<br>

```js
css: {
  loaderOptions: {
    sass: {
      // 新版本sass-loader， 将data改成prependData进行配置
      prependData: `@import "@/assets/scss/_variable.scss";`
    }
  }
}
```

> main.js 引入 ElementUI 以及加入图标库 <br>

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
Vue.use(ElementUI)
```

#### 4 使用 vuex 实现切换 tab(tag)页功能

> 在 index.vue 中引入 tag 组件<br>
> 在 vuex 中定义 tagList 存储 tag 的列表 方便非父子组件间传递数据<br>
> 定义 vuex 侧边栏点击后 将菜单假如到 tagList 中的方法<br>
> 定义 vuex 点击删除 tag 标签的方法<br>
