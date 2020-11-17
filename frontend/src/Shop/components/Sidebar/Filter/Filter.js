import React from 'react';
import { connect } from 'react-redux';

import FilterItem from './FilterItem/FilterItem';
import './Filter.scss';

const Filter = props => {
    const genresList = props.genresList.map(genre => {
        return <FilterItem 
                    genreId={genre.id}
                    key={genre.id}
                    checked={genre.checked}>{genre.name}</FilterItem>
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

const mapStateToProps = state => {
    return {
        genresList: state.genres
    };
};

export default connect(mapStateToProps)(Filter);