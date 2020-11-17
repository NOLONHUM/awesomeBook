import * as actionTypes from './actionTypes';

export const toggleGenreStatus = (genreId) => {
    return {
        type: actionTypes.TOGGLE_GENRE_STATUS,
        id: genreId
    }
}

