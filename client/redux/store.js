import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducer';
import thunk from 'redux-thunk'; // 转换为单参数柯里化函数

// eslint-disable-next-line
function logger(store) { //  传入store对象
    return (next) => (action) => {
        next(action);  // next middleware
    };
}

export default (initialState = {}) => {
    const store = createStore(combineReducers(initialState), applyMiddleware(thunk, logger));
    if (typeof window !== 'undefined') document.querySelector('#redux').remove();
    return store;
};