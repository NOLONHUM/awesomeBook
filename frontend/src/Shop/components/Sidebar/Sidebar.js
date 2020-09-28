import React from 'react';
import Button from '../../../shared/components/UI/Button/Button';

import Search from './Search/Search';
import './Sidebar.css';

const Sidebar = props => {
    return (
        <div className="sidebar">
            <Search />
            {/* CHECKBOXES */}
            <Button centered>ПОИСК</Button>
        </div>
    );
};

export default Sidebar;