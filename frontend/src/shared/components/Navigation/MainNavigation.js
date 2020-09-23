import React from 'react';

import NavLinks from './NavLinks/NavLinks';
import './MainNavigation.css';

const MainNavigation = props => {
    return (
        // TO DO: Add mobile version

        // Desktop
        <header className="main-navigation">
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            <a href="/" className="main-navigation__logo">Awesome<span>Book</span></a>
            <nav className="main-navigation__desktop-nav">
                <NavLinks />
            </nav>
        </header> 
    );
};

export default MainNavigation;