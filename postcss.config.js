
module.exports = (ctx) => {
  return {
    plugins: [
      ctx.webpack.mode === 'production' && require('cssnano')({
        preset: 'default'
      }),
      require('autoprefixer')
    ]
  }
}
