const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    context: __dirname,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    devtool:"source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'webpack-vue-template'
        })
    ],
    devServer:{
        contentBase:"./dist",
        open: true,
        port: 2222
    }
}