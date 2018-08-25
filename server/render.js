import path from 'path';
import fs from 'fs';
import React from 'react';
import createStore from '../client/redux/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from "react-dom/server";
import App from '../client/page/App';


export default (props) => {
    const context = {};
    const store = createStore(props.initialState);
    console.log('render');
    const content = renderToString(
        <Provider store={ store }>
            <StaticRouter context={ context } location={ props.url }>
                <App></App>
            </StaticRouter>
        </Provider>
    );

    const dom = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');
    const html = dom
        .replace(/'\$initialState'/, JSON.stringify(props.initialState))
        .replace(/\$Title/, props.title)
        .replace(/\$Content/, content);
    return html;
}