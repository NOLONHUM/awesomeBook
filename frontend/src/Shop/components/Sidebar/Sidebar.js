import React from 'react';
import Button from '../../../shared/components/UI/Button/Button';

import Search from './Search/Search';
import Filter from './Filter/Filter';
import './Sidebar.scss';

const Sidebar = props => {
    return (
        <form className="sidebar">
            <Search />
            <Filter genres={props.genres} />
            <Button centered>ПОИСК</Button>
        </form>
    );
};

export default Sidebar;