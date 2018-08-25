const path = require("path");

module.exports = {
    entry: {
        entry: path.resolve(__dirname, '../client/entry.js'),
        vendor: [
            'react', 'react-dom', 'redux', 'redux-actions', 
            'react-redux', 'react-router', 'react-router-dom'
        ]
    },
    output: {
        publicPath: '/',
        filename: "js/[name].js",
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                    name: 'i/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: 'i/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: []
}