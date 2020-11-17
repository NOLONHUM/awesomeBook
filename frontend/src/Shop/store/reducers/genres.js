import * as actionTypes from '../actions/actionTypes';

const initialState = [
    {
        id: 'history',
        name: 'История',
        checked: true
    },
    {
        id: 'science',
        name: 'Наука',
        checked: true
    },
    {
        id: 'philosophy',
        name: 'Философия',
        checked: true
    },
    {
        id: 'economy',
        name: 'Экономика',
        checked: true
    },
    {
        id: 'fiction',
        name: 'Художественное',
        checked: true
    }
];

const toggleGenreStatus = (state, action) => {
    const genreIndex = state.findIndex(genre => {
        return genre.id === action.id;
    });
    
    const newState = [
        ...state,
    ];
    newState[genreIndex].checked = !newState[genreIndex].checked;

    return newState;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_GENRE_STATUS:
            return toggleGenreStatus(state, action);
        default:
            return state;
    };
};

export default reducer;