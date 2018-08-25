import produce from 'immer';
import { handleActions } from 'redux-actions';
import actionTypes from './action-types';

const _initialState = {
    url: ''
};

export default (initialState = {}) => handleActions(
    {
        [actionTypes.PUT_URL]: produce((draft, { payload }) => {
            draft.url = payload;
        }),
    }, 
    { ..._initialState, ...initialState }
);   
