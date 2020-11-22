import React from 'react';

import './Search.scss';

const Search = props => {
    return (
        <div className="sidebar__search">
            <input 
                type="text" 
                placeholder="Поиск"
                onChange={props.onChange}
                value={props.value}></input>
        </div>
    );
};

export default Search;