## 热模块替换

- 复制本目录下的 package.json  和   webpack.config.js  文件

```json
// package.json
{
  "name": "003",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --env development",
    "dev": "webpack-dev-server --env development",
    "build": "webpack --env production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^2.28.0",
    "webpack": "^2.3.2",
    "webpack-dev-server": "^2.4.2"
  }
}

```

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    host: process.env.HOST, // Defaults to `localhost`
    port: 8080, // Defaults to 8080
  },
  entry: {
    app: "./app/app.js",
  },
  output: {
    path: path.resolve(__dirname,"build"),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hot replace',
    }),
  ],
};

```

- npm i

- npm run dev    或者    npm run start   这些可以在 package.json 中配置

- 浏览器打开  localhost:8080    端口号可以在webpack.config.js 中配置

> 热模块打包的资源是存在于内存中的

> 使用热模块能为我们的开发带来很多便利