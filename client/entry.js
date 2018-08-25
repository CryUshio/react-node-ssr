import 'babel-polyfill';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './page/App';

import './static/css/index.less';

const renderer = process.env.NODE_ENV === 'development' ? render : hydrate;

renderer(
    <Provider store={createStore(window.__INITIAL_STATE__)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#app')
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
}