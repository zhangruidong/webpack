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
