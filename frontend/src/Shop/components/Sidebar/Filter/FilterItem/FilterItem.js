import React from 'react';

import './FilterItem.css';

const FilterItem = props => {
    return (
        <li className="sidebar-filter__item">
            <input checked type="checkbox" id={props.genreId} name={props.genreId} />
            <label for={props.genreId}>{props.children}</label>
        </li>
    );
};

export default FilterItem;