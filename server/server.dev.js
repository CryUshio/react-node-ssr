const express = require('express');

const path = require('path');

const webpackDevConfig = require('../config/webpack.conf.dev');
const webpack = require('webpack');
const compiler = webpack(webpackDevConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
// const serverMiddleware = require('./serverMiddleware');

const app = express();
const port = process.env.port || 8888;

// app.use(express.static(path.join(__dirname, '../dist')));

const options = {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    headers: {
    //    'Access-Control-Allow-Origin': '*',
    //    "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS"
    }
};
app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(compiler));
// app.use(serverMiddleware);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.info(` -> ${process.env.NODE_ENV}`);  // eslint-disable-line
    console.log(`Listening at http://localhost${port === 80 ? '' : ':' + port}`);
});