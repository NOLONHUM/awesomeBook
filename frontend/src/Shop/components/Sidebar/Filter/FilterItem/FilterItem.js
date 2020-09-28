import React from 'react';

import './FilterItem.css';

const FilterItem = props => {
    return (
        <div>
            <input type="checkbox" id={props.genre} name={props.genre} />
            <label for={props.genre}>Жанр</label>
        </div>
    );
};

export default FilterItem;