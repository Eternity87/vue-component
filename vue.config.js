// vue.config.js
module.exports = {
    // 选项...
    // configureWebpack: {
    //     plugins: [
    //         new MyAwesomeWebpackPlugin()
    //     ]
    // },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
        } else {
          // 为开发环境修改配置...
        }
    }
}  