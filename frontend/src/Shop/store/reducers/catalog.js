import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../shared/util/updateObject';

const initialState = {
    isLoading: true,
    error: null,
    books: []
};

const fetchingStart = (state) => {
    return updateObject(state, {
        isLoading: true
    });
};

const fetchingSuccess = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        books: action.books,
        error: null
    });
};

const fetchingError = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        error: action.error
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return fetchingStart(state);
        case actionTypes.FETCHING_SUCCESS:
            return fetchingSuccess(state, action);
        case actionTypes.FETCHING_ERROR:
            return fetchingError(state, action);
        default:
            return state;
    };
};

export default reducer;