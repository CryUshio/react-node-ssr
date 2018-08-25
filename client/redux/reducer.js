import { combineReducers } from 'redux';
import home from './home/reducer';
import common from './common/reducer';

export default (initialState) => {
    const initializedReducers = {};
    for (const key in initialReducers) {
        if (key === initialState.key) {
            initializedReducers[key] = initialReducers[key](initialState.value);
        } else {
            initializedReducers[key] = initialReducers[key]();
        }
    }
    return combineReducers(initializedReducers);
};

const initialReducers = {
    home, common
};

