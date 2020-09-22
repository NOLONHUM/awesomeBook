import React from 'react';

import NavLinks from './NavLinks/NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
    return (

        // Desktop
        <header className="main-navigation">
            <a href="/" className="main-navigation__logo">Awesome<span>Book</span></a>
            <NavLinks />
        </header> 
    );
};

export default MainNavigation;