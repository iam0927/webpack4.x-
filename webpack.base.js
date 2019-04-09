const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].bundle.[hash:8].js'
  },
  resolve: { // 解析第三方 包
    modules: [path.resolve('node_modules')],
    extensions: ['.js', 'css', 'json']
  },
  module: { // 模块
    rules: [ // 处理相应的规则
      { // 处理css
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      { // 处理less文件
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env' // 调用它来处理js文件
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ]
            }
          }
        ]
      },
      { // 处理css js中引入的图片
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            // 做一个限制 当图片的大小没有超过限制，转化为base64
            // loader: 'file-loader'
            loader: 'url-loader',
            options: {
              // 如果图片小于200kb则转换为base64 超过限制后使用真实的路径
              limit: 200*1024,
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-withimg-loader'
          }
        ]
      }
    ]
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
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css' // 抽离后的css文件
    }),
    new webpack.ProvidePlugin({
      $: 'jquery' // 在每个模块中注入$符
      /**
       * 留坑给window.$
       */
    }),
    new CopyWebpackPlugin([
      { from: './src/assest', to: './assest' }
    ]),
    new webpack.BannerPlugin('Copyright © 2019 YeHeng All rights reserved.') // 版权声明
  ]
}
