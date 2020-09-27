import React from 'react';

import Search from './Search/Search';
import './Sidebar.css';

const Sidebar = props => {
    return (
        <div className="sidebar">
            <Search />
            {/* CHECKBOXES */}
        </div>
    );
};

export default Sidebar;