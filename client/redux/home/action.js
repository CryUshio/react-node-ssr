import { createAction } from 'redux-actions';
import actionTypes from './action-types';

export const getArticalListThunk = () => async (dispatch) => {

    dispatch(createAction(actionTypes.GET_ACTICAL_LIST_SUCCESS)());
}

export const getArticalDetailThunk = () => async (dispatch) => {
    
    dispatch(createAction(actionTypes.GET_ACTICAL_DETAIL_SUCCESS)());
}