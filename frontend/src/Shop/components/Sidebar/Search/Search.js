import React from 'react';

import './Search.css';

const Search = props => {
    return (
        <div className="sidebar-search">
            <input 
                type="text" 
                placeholder="Поиск" ></input>
        </div>
    );
};

export default Search;