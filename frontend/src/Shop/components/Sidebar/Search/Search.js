import React from 'react';

import './Search.css';

const Search = props => {
    return (
        <form className="search">
            <input 
                type="text" 
                placeholder="Поиск" ></input>
        </form>
    );
};

export default Search;