const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.conf.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    entry: {
        entry: ['webpack-hot-middleware/client?reload=true', path.resolve(__dirname, '../app/entry.js')],
    },
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.join(__dirname, '../app')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    configFile: '.eslintrc'
                }
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify('dev'),
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.bundle.js'
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ]
});
