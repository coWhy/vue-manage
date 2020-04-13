import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    if (username === 'admin' || username === 'wp') {
      // 判断账号和密码是否对应
      if (username === 'admin' && password === '111222') {
        return {
          code: 20000,
          data: {
            menu: [
              {
                path: '/',
                name: 'home',
                title: '首页',
                icon: 'el-icon-s-home',
                url: 'home/index'
              },
              {
                path: '/video',
                name: 'video',
                title: '视频管理',
                icon: 'el-icon-video-play',
                url: 'video/index'
              },
              {
                path: '/user',
                name: 'user',
                title: '用户管理',
                icon: 'el-icon-user',
                url: 'user/index'
              },
              {
                title: '其他',
                icon: 'el-icon-s-promotion',
                children: [
                  {
                    path: '/page1',
                    name: 'page1',
                    title: '页面1',
                    icon: 'el-icon-setting',
                    url: 'other/page1'
                  },
                  {
                    path: '/page2',
                    name: 'page2',
                    title: '页面2',
                    icon: 'el-icon-setting',
                    url: 'other/page2'
                  }
                ]
              }
            ],
            token: Mock.Random.guid(),
            message: '获取成功'
          }
        }
      } else if (username === 'wp' && password === '123456') {
        return {
          code: 20000,
          data: {
            menu: [
              {
                path: '/',
                name: 'home',
                title: '首页',
                icon: 'el-icon-s-home',
                url: 'home/index'
              },
              {
                path: '/video',
                name: 'video',
                title: '视频管理',
                icon: 'el-icon-video-play',
                url: 'video/index'
              }
            ],
            token: Mock.Random.guid(),
            message: '获取成功'
          }
        }
      } else {
        return {
          code: -999,
          data: {
            message: '密码错误'
          }
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '用户不存在'
        }
      }
    }
  }
}
