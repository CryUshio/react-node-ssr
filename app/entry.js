import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from '@/page/App';

render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.querySelector('#app')
);
