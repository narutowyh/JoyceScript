const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  mode: 'development', // "production" | "development" | "none"
  devtool: "cheap-module-eval-source-map",
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, "../dist"), // 类型string 输出文件的目标路径 必须为绝对路径
    chunkFilename: "[name].[hash].js",
    filename: "index.js", // string 「入口分块(entry chunk)」的文件名模板（出口分块？）
    publicPath: "/" // string  输出解析文件的目录，url 相对于 HTML 页面
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        // exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-syntax-dynamic-import'],
                ['import', { libraryName: 'antd', style: 'css' }],
                'transform-class-properties'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 用mini-css-extract-plugin时候不用style-loader
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('postcss-nested')() // 选择器嵌套的语法
                // require('autoprefixer')(), // 处理浏览器私有前缀
              ]
            }
          }
          // 'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Joyce',
      template: path.resolve(__dirname, '../src/index.html'),
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.DllReferencePlugin({
      context: __dirname, // (absolute path) context of requests in the manifest (or content property)
      manifest: require('../node_modules/dll/manifest.json')
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: `${path.resolve(__dirname, '../dist')}/lib.*.js`
    })
  ]
}
