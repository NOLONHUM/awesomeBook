import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return (
        <ul className="main-navigation__links" onClick={props.onClick}>
            <li>
                <NavLink to="/cart">
                    Корзина
                </NavLink>
            </li>
            <li>
                <NavLink to="/login">
                    Вход
                </NavLink>
            </li>
        </ul>
    )
};

export default NavLinks;