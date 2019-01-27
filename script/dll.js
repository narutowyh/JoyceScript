const webpack = require('webpack')
const webpackConfig = require('../webpack/webpack.config.dll')

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.info('something err', err)
  }
  // 处理完成
  console.info('complete')
})
