/**
 * Edit by bookkilled on 16/4/7.
 */

var path = require('path');
var webpack = require('webpack');

var extensions = ['','.js','.jsx'];

module.exports = {
    entry: path.resolve(__dirname, '../client/pages/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public/assets/'), //webpack打包后存放的绝对路径
        publicPath: path.resolve(__dirname, '/assets/')  //webpack打包后在服务器上的路径
    },

    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader?{rules:{semi:0}}',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },

    eslint: {
        failOnWarning: false,
        failOnError: true
    },

    resolve: {
        extensions: extensions
    },

    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};