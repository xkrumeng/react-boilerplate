const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('./base.config.js')

module.exports = {
  target: 'web',

  // 模式   development   production
  // 告知 webpack 使用相应模式的内置优化 只设置 NODE_ENV， 会将 process.env.NODE_ENV 的值
  // 设为 development  则不会自动设置 mode
  mode: config.prod.mode,

  // 入口起点
  entry: {
    app: path.resolve(config.root, 'src/index.js'),
    vendors: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'redux-saga']
  },

  // 输出配置
  output: {
    // 目标输出目录 path 的绝对路径
    path: path.resolve(config.root, 'dist'),
    // 用于输出文件的文件名
    filename: '[name].[hash:8].js',
    publicPath: '/',
    // 分块名称设置
    chunkFilename: '[name]_[chunkhash:8].js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    alias: Object.assign({}, config.resolveAlias)
  },
  // loaders
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   loader: 'awesome-typescript-loader'
      // },
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   loader: "source-map-loader"
      // },
      // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      // css-loader
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // 编译后用什么loader来提取css文件
          use: [ // 指需要什么样的loader去编译文件
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },

  // 插件
  plugins: [
    // 删除文件夹的插件
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('app.css'),
    new HtmlWebpackPlugin({
      title: 'React-boilerplate',
      template: path.resolve(config.root, 'index.html'),
      minify: {
        collapseWhitespace: true, // 去除空格
        removeComments: true // 去除注释
      }
    })
  ]
}
