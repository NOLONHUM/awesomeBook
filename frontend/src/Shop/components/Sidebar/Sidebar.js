import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Search from './Search/Search';
import Filter from './Filter/Filter';
import Button from '../../../shared/components/UI/Button/Button';
import './Sidebar.scss';

const Sidebar = props => {
    const [searchBar, setSearchBar] = useState('');
    
    const submitFormHandler = (event) => {
        event.preventDefault();
        props.fetchBooks(props.genresList, searchBar);
    };

    const changeSearchBarHandler = (event) => {
        setSearchBar(event.target.value);
    };
    
    return (
        <form 
            className="sidebar"
            onSubmit={submitFormHandler}>
            <Search 
                onChange={changeSearchBarHandler}
                value={searchBar} />
            <Filter genresList={props.genresList} />
            <Button centered>ПОИСК</Button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        genresList: state.genres
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (genresList, title) => dispatch(actions.fetchBooks(genresList, title))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);