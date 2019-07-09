const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const config = require('./base.config.js')

module.exports = {
  target: 'web',

  // 模式   development   production
  // 告知 webpack 使用相应模式的内置优化 只设置 NODE_ENV， 会将 process.env.NODE_ENV 的值设
  // 为 development 则不会自动设置 mode
  mode: config.dev.mode,

  devtool: 'eval-source-map',

  devServer: config.dev.devServer,

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: Object.assign({}, config.resolveAlias)
  },

  // 入口起点
  entry: {
    app: path.resolve(config.root, 'src/index.js')
  },

  // 输出配置
  output: {
    // 目标输出目录 path 的绝对路径
    path: path.resolve(config.root, 'dist'),
    publicPath: '/',
    // 用于输出文件的文件名 app.bundle.js
    filename: '[name].bundle.js'
  },

  // loaders
  module: {
    rules: [
      // eslint检查
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc.js'
        }
      },
      // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      // css-loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // less-loader
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240
            }
          }
        ]
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },

  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React-boilerplate',
      filename: 'index.html',
      template: path.resolve(config.root, 'index.html'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
