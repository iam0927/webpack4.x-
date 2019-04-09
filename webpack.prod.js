const {smart} = require('webpack-merge')
const WebpackBase = require('./webpack.base.js')

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = smart(WebpackBase, {
  mode: 'production',
  output: {
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: { // 优化项
    minimizer: [
      new UglifyjsWebpackPlugin({
        cache: true, //是否缓存
        parallel: true, // 一起压缩多个
        sourceMap: true // 源码映射
      }), // 压缩js
      new OptimizeCssAssetsWebpackPlugin() // 压缩css
    ]
  }
})
