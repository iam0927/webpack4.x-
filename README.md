## webpack安装

- 安装本地webpack和webpack-cli

## webpack可以进行0配置

没有任何配置文件下，执行`npx webpack`
在根目录下生成dist/main.js

## 手动配置webpack

默认配置文件 webpack.config.js

## 启动 本地服务

`webpack-dev-server`

- 配置开发服务

- 将打包后的js自动注入到html当中

- 处理css文件

在module中配置rules

`css-loader style-loader`
`less-loader less`

- 抽离css到单独的文件

`mini-css-extract-plugin`

- 处理css3浏览器兼容前缀

`autoprefixer postcss-loader`

新建postcss.config.js

- 压缩css

`optimize-css-assets-webpack-plugin`

添加节点 optimization 优化项


- 转换es6语法为es5

`babel-loader @babel/core @babel/preset-env`

转换es6高级语法

`@babel/plugin-proposal-class-properties`

`@babel/plugin-proposal-decorators`

- 全局变量的使用

plugins中添加new webpack.ProvidePlugin

如果是外部引入则需要配置 externals

- webpack打包图片

`file-loader html-withimg-loader url-loader`

- 打包分类

- 配置source map

- cleanwebpackplugin

静态资源拷贝

`copy-webpack-plugin`