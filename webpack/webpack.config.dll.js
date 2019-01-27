const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: { // 此处应该打包出一个文件，所以要打包的入口为一个用Object
    lib: [
      'antd',
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'redux-saga'
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dist"), // 类型string 输出文件的目标路径 必须为绝对路径
    library: 'lib',
    filename: "[name].[hash].js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
    publicPath: "/" // string    // 输出解析文件的目录，url 相对于 HTML 页面
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.resolve(__dirname, '../node_modules/dll/manifest.json'), // absolute path to the manifest json file (output)
      name: '[name]' // name of the exposed dll function (TemplatePaths: [hash] & [name] )
    })
  ]
}
