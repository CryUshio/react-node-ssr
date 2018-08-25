const path = require("path");
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.conf.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
    output: {
        path: path.join(__dirname, "../dist"),
        publicPath: '/',
        filename: 'js/[name]-[chunkhash:8].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true,
                    priority: 10
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../client/index.html'),
            title: '$Title'
        }),
        new FriendlyErrorsPlugin()
    ],
    node: {
        fs: 'empty'
    }
});