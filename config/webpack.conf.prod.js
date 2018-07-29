const webpack = require('webpack');
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.conf.base');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = merge(webpackBaseConfig, {
    output: {
        path: path.join(__dirname, "../dist/client"),
        publicPath: '/',
        filename: '[name]-[chunkhash].js',
        // chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'BUILD_ENV': JSON.stringify('prod'),
        }),
        new ExtractTextPlugin('css/[name]-[contenthash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            filename: '[name]-[chunkhash].js'
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new FriendlyErrorsPlugin()
    ],
    node: {
        fs: 'empty'
    }
});

module.exports = config;
