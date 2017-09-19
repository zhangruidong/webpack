const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATH = {
    app: path.join(__dirname,"app"),
    build: path.join(__dirname,"build")
};

module.exports = {
    devServer: {
        host: process.env.HOST,
        port:9999
    },
    entry: {
        app: PATH.app
    },
    output: {
        path: PATH.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'hello webpack'
        })
    ]
}