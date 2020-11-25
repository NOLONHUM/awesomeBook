import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notiflix from "notiflix";

import * as actions from '../store/actions/index';

import Catalog from '../components/Catalog/Catalog';
import Sidebar from '../components/Sidebar/Sidebar';

import './Shop.scss';

class Shop extends Component {
    componentDidMount() {
        this.props.fetchBooks(this.props.genresList);
    };

    componentDidUpdate() {
        if (this.props.catalogError) {
          Notiflix.Notify.Failure(this.props.catalogError);
          this.props.clearError();
        };
    };

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
        genresList: state.genres,
        catalogError: state.catalog.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (genresList) => dispatch(actions.fetchBooks(genresList)),
        clearError: () => dispatch(actions.clearError())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);