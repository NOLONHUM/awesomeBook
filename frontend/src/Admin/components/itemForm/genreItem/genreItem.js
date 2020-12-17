import React from 'react';

import './genreItem.scss';

const GenreItem = props => {
    return (
        <li className="add-item__genre-item">
            <input 
                checked={props.checked}
                type="checkbox" 
                id={props.id}
                name={props.id}
                onChange={props.onChange} />
            <label htmlFor={props.id}>{props.children}</label>
        </li>
    );
};

export default GenreItem;