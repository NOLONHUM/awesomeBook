import React from 'react';

import './Input.scss';

const Input = props => {
    let element = (
        <input
            id={props.id}
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder} />
    );
    
    return (
        <div className='input'>
            {props.label ?
                <label htmlFor={props.id}>{props.label}</label> : null}
            {element}
        </div>
    )
}

export default Input;