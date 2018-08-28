const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');

// import render from './render';
const { render } = require('../dist/server.bundle');
const { cleanCache } = require('./util');
const Database = require('../model/db');

const app = express();
const port = process.env.port || 8888;
const database = new Database();

process.env.root = path.resolve(__dirname, '../');
process.env.host = `127.0.0.1:${port}`;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log('request /');
    res.redirect('/index');
});
app.get('/api/*', (req, res) => {
    const dataPath = path.join(__dirname, '../api/data', req.path.replace('/api', ''));
    try {
        cleanCache(require.resolve(dataPath));
    } catch (e) {
        console.log(e);
    }
    const handler = require(dataPath);
    handler(req, res);
    return;
});
app.get(/^[^\.]+$/, (req, res) => {
    const pagePath = path.join(__dirname, '../api/page/', req.path);
    console.log(pagePath);
    try {
        const handler = require(pagePath);
        handler(req, res, database, render);
    } catch (error) {
        res.end('404 Not found.');
    }
    return;
});
app.use(express.static(path.join(__dirname, '../dist')));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening at http://localhost${port === 80 ? '' : ':' + port}`);
});