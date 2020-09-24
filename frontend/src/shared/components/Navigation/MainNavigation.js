import React, { useState } from 'react';

import SideDrawer from './SideDrawer';
import NavLinks from './NavLinks/NavLinks';
import './MainNavigation.css';
import Backdrop from '../UI/Backdrop/Backdrop';
import Logo from './Logo/Logo';

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
      };
    
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };
    
    return (
        <>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen}>
                <nav className="main-navigation__drawer-nav">
                    <Logo black centered large />
                    <NavLinks onClick={closeDrawerHandler} />
                </nav>
            </SideDrawer>

            <header className="main-navigation">
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <Logo />
                <nav className="main-navigation__desktop-nav">
                    <NavLinks />
                </nav>
            </header>
        </>
    );
};

export default MainNavigation;