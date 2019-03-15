const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].bundle.[hash:8].js'
  },
  devServer: {
    port: 8089,
    progress: true, // 进度条
    compress: true, // 压缩
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true, // 删除html文件双引号
        collapseWhitespace: true // 让html折叠为单行
      },
      hash: true // 打包之后缓存的问题
    })
  ]
}
