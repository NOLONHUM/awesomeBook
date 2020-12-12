import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Notiflix from "notiflix";

import * as actions from '../store/actions/index';

import Catalog from '../components/Catalog/Catalog';
import Sidebar from '../components/Sidebar/Sidebar';

import './Shop.scss';
import Pagination from '../components/Pagination/Pagination';

class Shop extends Component {
    componentDidMount() {
        let page = this.props.match.params.page || 1;
        this.props.fetchBooks(this.props.genresList, page);
    };

    componentDidUpdate() {
        if (this.props.catalogError) {
          Notiflix.Notify.Failure(this.props.catalogError);
          this.props.clearError();
        };
        let page = this.props.match.params.page || 1;
        this.props.fetchBooks(this.props.genresList, page);
    };

    render() {
        return (
            <div className="shop">
                <Sidebar/>
                <div className="shop__catalog-section">
                    <Catalog />
                    <Pagination />
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        genresList: state.genres,
        catalogError: state.catalog.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: (genresList, page) => dispatch(actions.fetchBooks(genresList, page)),
        clearError: () => dispatch(actions.clearError())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));