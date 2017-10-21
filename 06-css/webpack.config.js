const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack")

let config = {
  context: __dirname,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "bundle.js",
    publicPath: "./dist/"
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name].[ext ]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        // use: ["style-loader","css-loader"]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin("styles.css"),
  ]
};

module.exports = config;