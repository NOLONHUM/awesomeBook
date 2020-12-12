import * as actionTypes from './actionTypes';

export const fetchingStart = () => {
    return {
        type: actionTypes.FETCHING_START
    };
};

export const fetchingSuccess = (data) => {
    return {
        type: actionTypes.FETCHING_SUCCESS,
        books: data.books,
        totalItems: data.totalItems
    };
};

export const fetchingError = (error) => {
    return {
        type: actionTypes.FETCHING_ERROR,
        error: error
    };
};

export const fetchBooks = (genresList, page, title) => {
    return async dispatch => {
        dispatch(fetchingStart());
        try {
            const pickedGenres = genresList.filter(genre => {
                return genre.checked;
            }).map(genre => {
                return genre.id;
            });
            let query = pickedGenres.join('&');
            if (title) query += `&title=${title}`;
            if (page) query += `&page=${page}`
            const response = await fetch('http://localhost:5000/api/shop?' + query);
            const parsedData = await response.json();
            if (!response.ok) {
                throw new Error(parsedData.message)
            };
            dispatch(fetchingSuccess(parsedData));
        } catch(err) {
            dispatch(fetchingError(err));
        }
    };
};

export const clearError = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    };
};
