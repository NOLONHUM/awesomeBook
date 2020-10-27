import React from 'react';

import './Logo.css';

const Logo = props => {
    const classes = `main-navigation__logo
     ${props.black ? ' main-navigation__logo_black' : ''}
     ${props.centered ? ' main-navigation__logo_centered' : ''}`
    
    return (
        <a href="/" className={classes}>Awesome<span>Book</span></a>
    );
};

export default Logo;