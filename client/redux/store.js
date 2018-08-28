import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducer';
import thunk from 'redux-thunk'; // 转换为单参数柯里化函数

function logger(store) { //  传入store对象
    return (next) => (action) => {
        console.log('log action:\n', action);
        next(action);  // next middleware
    };
}

export default (initialState = {}) => {
    const store = createStore(combineReducers(initialState), applyMiddleware(thunk, logger));
    return store;
};