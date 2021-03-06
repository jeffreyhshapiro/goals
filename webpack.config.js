const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry:  __dirname + '/app/index.js',
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
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?sourceMap']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            "/register"    : "http://localhost:3000/api",
            "/authenticate": "http://localhost:3000/api",
            "/verifyAuth"  : "http://localhost:3000/api",
            "/logout"      : "http://localhost:3000/api",
            "/createGoal"  : "http://localhost:3000/api/goal",
            "/submitFriend": "http://localhost:3000/api/friend",
            "/friends"     : "http://localhost:3000/api/friend",
        }
    },
    plugins: [HTMLWebpackPluginConfig]
}