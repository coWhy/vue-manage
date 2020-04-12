// 常用配置
module.exports = {
  devServer: {
    port: 8082,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // 配置代理 （以接口 https://www.easy-mock.com/mock/5ce2a7854c85c12abefbae0b/api 说明）
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true, // 是否改变域名
        ws: true
        // pathRewrite: {
        //   // 路径重写
        //   "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        // }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // 新版本sass-loader， 将data改成prependData进行配置
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
