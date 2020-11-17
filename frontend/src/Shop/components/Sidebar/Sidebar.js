import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Search from './Search/Search';
import Filter from './Filter/Filter';
import Button from '../../../shared/components/UI/Button/Button';
import './Sidebar.scss';

const Sidebar = props => {
    const submitFormHandler = (event) => {
        event.preventDefault();
        props.fetchBooks(props.genresList);
    };
    
    return (
        <form 
            className="sidebar"
            onSubmit={submitFormHandler}>
            <Search />
            <Filter genres={props.genres} />
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
        fetchBooks: (genresList) => dispatch(actions.fetchBooks(genresList))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);