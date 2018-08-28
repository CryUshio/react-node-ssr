import path from 'path';
import fs from 'fs';
import React from 'react';
import createStore from '@/redux/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from "react-dom/server";
import App from '@/page/App';


export function render(props) {
    const context = {};
    const store = createStore(props.initialState);

    const content = renderToString(
        <Provider store={ store }>
            <StaticRouter context={ context } location={ props.url }>
                <App></App>
            </StaticRouter>
        </Provider>
    );

    const dom = fs.readFileSync(path.resolve(process.env.root, 'dist/index.html'), 'utf8');
    const html = dom
        .replace(/(\/favicon.ico)/, `//${process.env.host}$1`)
        .replace(/'\$initialState'/, JSON.stringify(props.initialState))
        .replace(/\$Title/, props.title)
        .replace(/\$Content/, content);
    return html;
}