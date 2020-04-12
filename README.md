#### vue-manage-sys

## 项目设置

```
yarn install
```

### 编译和热加载用于开发

```
yarn serve
```

### 编译和缩小生产

```
yarn build
```

### Lints 和修复文件

```
yarn lint
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
