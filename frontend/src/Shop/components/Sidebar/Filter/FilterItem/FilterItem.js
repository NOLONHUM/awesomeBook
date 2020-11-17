import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/index';

import './FilterItem.scss';

const FilterItem = props => {
    return (
        <li className="sidebar-filter__item">
            <input 
                checked={props.checked}
                type="checkbox" 
                id={props.genreId}
                name={props.genreId}
                onChange={() => props.toggleGenreStatus(props.genreId)} />
            <label htmlFor={props.genreId}>{props.children}</label>
        </li>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        toggleGenreStatus: (genreId) => dispatch(actions.toggleGenreStatus(genreId))
    };
};

export default connect(null, mapDispatchToProps)(FilterItem);