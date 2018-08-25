import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducer';
import thunk from 'redux-thunk';

function logger(store) {
    return (next) => (action) => {
        console.log('log action:\n', action);
        next(action);  // next = dispatch
    };
}

export default (initialState = {}) => {
    const store = createStore(combineReducers(initialState), applyMiddleware(thunk, logger));
    return store;
};