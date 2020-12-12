import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Pagination.scss';
import PaginationItem from './PaginationLink/PaginationLink';

const Pagination = props => {
    const page = +props.match.params.page || 1;
    const lastPage = Math.ceil(props.totalItems / 8);
    
    return (
        <div className="pagination">
            {page !== 1 ? <PaginationItem page={1} /> : null}
            {page >= 4 ? <p>...</p> : null}
            {page >= 3 ? <PaginationItem page={page - 1} /> : null}
            <PaginationItem page={page} />
            {page < lastPage - 1 ? <PaginationItem page={page + 1} /> : null}
            {page < lastPage - 2 ? <p>...</p> : null}
            {page !== lastPage && lastPage ? <PaginationItem page={lastPage} /> : null}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        totalItems: state.catalog.totalItems
    };
};

export default withRouter(connect(mapStateToProps)(Pagination));