import React from 'react';

const Input = props => {
    let element = (
        <input
            id={props.id}
            type={props.type}
            onChange={props.onChange}
            value={props.value} />
    );

    if (props.element === 'textarea') {
        element = (
            <textarea
                id={props.id}
                onChange={props.onChange}
                value={props.value} />
        );
    };
    
    return (
        <div>
            {props.label ?
                <label htmlFor={props.id}>{props.label}</label> : null}
            {element}
        </div>
    )
}

export default Input;