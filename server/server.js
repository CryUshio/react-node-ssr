import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';

import render from './render';
// import App from '@/page/App';

const app = express();

const port = process.env.port || 8888;
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
    const initialState = { url: req.path };
    // const appString = renderToString(<App {...initialState} />);
    const appString = "Hello World.";

    res.set('Content-Type', 'text/html');
    res.send(render({ 
        title: 'server side render',
        content: appString,
        initialState: JSON.stringify(initialState)
    }));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening at http://localhost${port === 80 ? '' : ':' + port}`);
});