const webpack = require('webpack')
const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const webpackDllConfig = require('../webpack/webpack.config.dll')

webpack(webpackDllConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.info('打包dll失败：', err)
    return
  }
  const compiler = webpack(require('../webpack/webpack.config.dev'))
  const server = new WebpackDevServer(compiler, {
    hot: true, // 启用 webpack 的模块热替换特性
    contentBase: path.join(__dirname, "dist"), // ??不太理解
    compress: true, // 是否启用压缩
    port: 8080 // 端口
  })
  server.listen(8080, 'localhost', (error) => {
    if (error) {
      console.info('启动失败', error)
    } else {
      console.info('启动成功：http://localhost:8080/')
    }
  })
})
