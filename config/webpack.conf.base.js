const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        client: path.resolve(__dirname, '../app/entry.js'),
        vendor: [
            'react', 'react-dom', 'redux', 'redux-actions', 
            'react-redux', 'react-router', 'react-router-dom'
        ]
    },
    output: {
        publicPath: '/',
        filename: "js/[name].js",
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../app'), 
        },
    },
    module: {
        rules: [{
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'client/i/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'client/i/[name].[hash:8].[ext]'
                }
            }, 
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../app/index.html'),
        })
    ]
}