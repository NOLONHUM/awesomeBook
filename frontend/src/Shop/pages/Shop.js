import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Catalog from '../components/Catalog/Catalog';
import Sidebar from '../components/Sidebar/Sidebar';

import './Shop.scss';

const Shop = props => {
    const [fetchBooks, genresList] = [props.fetchBooks, props.genresList];
    
    useEffect(() => {
        fetchBooks(genresList);
    }, [fetchBooks, genresList]);

    return (
        <div className="shop">
            <Sidebar/>
            <Catalog books={props.books} isLoading={props.isLoading} />
            {/* PAGINATION */}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.catalog.isLoading,
        books: state.catalog.books,
        genresList: state.genres
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (genresList) => dispatch(actions.fetchBooks(genresList))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);