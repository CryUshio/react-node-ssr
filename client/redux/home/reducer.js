import produce from 'immer';
import { handleActions } from 'redux-actions';
import actionTypes from './action-types';

const _initialState = {
    articalList: [],
    articalDetail: {},
};

export default (initialState = {}) => handleActions(
    {
        [actionTypes.GET_ACTICAL_LIST_SUCCESS]: produce((draft, { payload }) => {
            draft.articalList = payload;
        }),
        [actionTypes.GET_ACTICAL_DETAIL_SUCCESS]: produce((draft, { payload }) => {
            draft.articalDetail[payload.key] = payload.value;
        })
    }, 
    { ..._initialState, ...initialState }
);   