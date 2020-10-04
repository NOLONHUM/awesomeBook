import React from 'react';

import './FilterItem.css';

const FilterItem = props => {
    return (
        <li className="sidebar-filter__item">
            <input 
                defaultChecked
                type="checkbox" 
                id={props.genreId}
                name={props.genreId} />
            <label htmlFor={props.genreId}>{props.children}</label>
        </li>
    );
};

export default FilterItem;