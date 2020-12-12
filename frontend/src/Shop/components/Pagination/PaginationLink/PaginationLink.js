import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './PaginationLink.scss';

const PaginationItem = props => {
    const page = +props.match.params.page || 1;
    
    return (
        <NavLink 
            className={`pagination__item${page === props.page ? ' pagination__item_active' : ''}`} 
            to={`/${props.page}`}>
            {props.page}
        </NavLink >
    );
};

export default withRouter(PaginationItem);