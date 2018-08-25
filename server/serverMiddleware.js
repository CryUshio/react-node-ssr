// const htmlTemplate = require('./render');
const path = require('path');
const { cleanCache } = require('./util');

function server(req, res) {
    switch (req.path) {
        case '/': 
            res.redirect('/index');
            break;
        case '/index': 
            res.send("Index!");
            // pageApi(req, res);
            break;
        default: 
            dataApi(req, res);
    }
}

function pageApi(req, res) {
    const apiPath = path.resolve(__dirname, '../api/', req.path);
    try {
        cleanCache(require.resolve(apiPath));
    } catch (e) {
        console.log(e);
    }
    const handler = require(apiPath);
    const reactDOM = handler(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlTemplate({ component: reactDOM, url: req.path }));
    return;
}

function dataApi(req, res) {
    const apiPath = path.resolve(__dirname, '../api/', req.path);
    try {
        cleanCache(require.resolve(apiPath));
    } catch (e) {
        console.log(e);
    }
    const handler = require(apiPath);
    handler(req, res);
    return;
}

module.exports = server;
