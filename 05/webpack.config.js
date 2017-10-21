const path = require("path");

let config = {
  context: __dirname,
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname,"dist"),
    filename: "bundle.js"
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
      }
    ]
  }
}

module.exports= config;