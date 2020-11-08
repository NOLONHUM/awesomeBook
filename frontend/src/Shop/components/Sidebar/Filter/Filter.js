import React from 'react';

import FilterItem from './FilterItem/FilterItem';
import './Filter.scss';

const genres = [
    {
        id: 'history',
        name: 'История',
        picked: true
    },
    {
        id: 'science',
        name: 'Наука',
        picked: true
    },
    {
        id: 'philosophy',
        name: 'Философия',
        picked: true
    },
    {
        id: 'economy',
        name: 'Экономика',
        picked: true
    },
    {
        id: 'fiction',
        name: 'Художественное',
        picked: true
    }
];

const Filter = props => {
    // TO DO: refactor filter
    const genresList = genres.map(genre => {
        return <FilterItem 
                    genreId={genre.id}
                    key={genre.id}>{genre.name}</FilterItem>
    });
    
    return (
        <div className="sidebar__filter">
            <h3 className="sidebar__header">Жанры</h3>
            <ul className="sidebar__list">
                {genresList}
            </ul>
        </div>
    );
};

export default Filter;