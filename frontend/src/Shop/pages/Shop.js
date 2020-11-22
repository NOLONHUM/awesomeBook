import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import Catalog from '../components/Catalog/Catalog';
import Sidebar from '../components/Sidebar/Sidebar';

import './Shop.scss';

class Shop extends Component {
    componentDidMount() {
        this.props.fetchBooks(this.props.genresList)
    }

    render() {
        return (
            <div className="shop">
                <Sidebar/>
                <Catalog books={this.props.books} isLoading={this.props.isLoading} />
                {/* PAGINATION */}
            </div>
        );
    }
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