const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: __dirname + '/app/index.js',
    output: {
        path: __dirname + "./bin",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
            }, 
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}