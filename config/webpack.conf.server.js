const webpack = require('webpack');
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = {
    entry: {
        server: path.resolve(__dirname, '../server/server.js')
    },
    output: {
        path: path.join(__dirname, "../dist"),
        publicPath: '/',
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../app'), 
        },
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    externals: nodeExternals(),
    plugins: [
        new webpack.DefinePlugin({
            'BUILD_ENV': JSON.stringify('server'),
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
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
};

module.exports = config;
