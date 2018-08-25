import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';

import render from './render';
import mongodb from '../models/db';

const app = express();

const port = process.env.port || 8888;
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log('request /');
    res.redirect('/index');
});
app.get(/\/(index|about)/, (req, res) => {
    // mongodb((err, db) => {
    //     const data = db.collection('label').find();
    //     console.log(data);
    //     console.log('连接成功');
    //     db.close();
    // });

    const initialState = {
        key: 'common',
        value: { 
            url: req.path,
            // label: 
        }
    };
    
    console.log(req.path);
    res.set('Content-Type', 'text/html');
    res.send(render({ 
        title: 'server side render',
        url: req.path,
        initialState
    }));
});
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening at http://localhost${port === 80 ? '' : ':' + port}`);
});