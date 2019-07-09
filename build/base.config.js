const path = require('path')

module.exports = {
  // 根目录
  root: path.resolve(__dirname, '../'),

  resolveAlias: {

  },

  dev: {
    // 模式   development   production
    // 告知 webpack 使用相应模式的内置优化 只设置 NODE_ENV， 会将 process.env.NODE_ENV 的值
    // 设为 development  则不会自动设置 mode
    mode: 'development',

    // 开发环境的服务器配置
    devServer: {
      // 指定启动服务的更目录
      contentBase: '/dist/',
      // 指定端口号
      port: 8080,
      host: '127.0.0.1',
      // 启用热更新
      hot: true,
      inline: true,
      historyApiFallback: true,
      noInfo: false
    }
  },

  prod: {
    mode: 'production'
  }
}
