const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../server/render.js'),
    // 为了不打包进 Nodejs 内置的模块，例如 fs net 模块等
    target: 'node',
    // 为了不打包进 node_modules 目录下的第三方模块
    externals: [nodeExternals()],
    output: {
        // 为了以 CommonJS2 规范导出渲染函数，以给采用 Nodejs 编写的 HTTP 服务调用
        libraryTarget: 'commonjs2',
        // 把最终可在 Nodejs 中运行的代码输出到一个 bundle.js 文件
        filename: 'server.bundle.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, '../client')
        }
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: require(path.resolve(__dirname, '../babelrc'))('server')
                }
            },
            {
                // CSS 代码不能被打包进用于服务端的代码中去，忽略掉 CSS 文件
                test: /\.(css|less)/,
                use: ['ignore-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                use: ['ignore-loader']
            },
        ]
    }
};