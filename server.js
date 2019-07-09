const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./build/webpack.dev.config')

const compiler = webpack(webpackConfig)

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
  stats: {
    colors: true
  }
})

const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(devServerOptions.port, devServerOptions.host, () => {
  console.log('Starting server on http://localhost:8080')
})
