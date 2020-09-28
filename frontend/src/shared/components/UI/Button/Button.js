import React from 'react';

import './Button.css';

const Button = props => {
    const classes = `button
     ${props.centered ? ' button__centered' : ''}`
    
    return (
        <button className={classes}>
            {props.children}
        </button>
    );
};

export default Button;