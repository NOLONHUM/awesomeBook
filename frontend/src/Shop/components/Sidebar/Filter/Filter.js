import React from 'react';

import FilterItem from './FilterItem/FilterItem';
import './Filter.css';

const Filter = props => {
    const genresList = props.genres.map(genre => {
        return <FilterItem genreId={genre.id}>{genre.name}</FilterItem>
    });
    
    return (
        <div className="sidebar-filter">
            <h3 className="sidebar-filter__header">Жанры</h3>
            <ul className="sidebar-filter__list">
                {genresList}
            </ul>
        </div>
    );
};

export default Filter;