const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.conf.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    entry: {
        entry: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            path.resolve(__dirname, '../client/entry.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].js'
    },
    devtool: '#source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.join(__dirname, '../client')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    configFile: '.eslintrc'
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../client/index.html'),
            title: 'React SSR'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ]
});
