import * as actionTypes from './actionTypes';

export const fetchingStart = () => {
    return {
        type: actionTypes.FETCHING_START
    };
};

export const fetchingSuccess = (books) => {
    return {
        type: actionTypes.FETCHING_SUCCESS,
        books: books
    };
};

export const fetchingError = (error) => {
    return {
        type: actionTypes.FETCHING_ERROR,
        error: error
    };
};

export const fetchBooks = (genresList) => {
    return async dispatch => {
        dispatch(fetchingStart());
        // TO DO: Implement decent error handling
        try {
            const pickedGenres = genresList.filter(genre => {
                return genre.checked;
            }).map(genre => {
                return genre.id;
            });
            const query = pickedGenres.join('&');
            const responseData = await fetch('http://localhost:5000/api/shop?' + query);
            const parsedData = await responseData.json();
            dispatch(fetchingSuccess(parsedData));
        } catch(err) {
            dispatch(fetchingError(err));
        }
    };
};

