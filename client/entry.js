import 'babel-polyfill';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './page/App';

import './static/css/index.less';

const renderer = process.env.NODE_ENV === 'development' ? render : hydrate;
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

renderer(
    <Provider store={createStore(window.__INITIAL_STATE__)}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#app')
);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
}