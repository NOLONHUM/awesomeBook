import React from 'react';

import './Button.scss';

const Button = props => {
    const classes = `button
     ${props.centered ? ' button_centered' : ''}`
    
    return (
        <button className={classes}>
            {props.children}
        </button>
    );
};

export default Button;