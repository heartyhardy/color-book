import React from 'react';

const Aux = props => (
    <div
        className={props.className}
        style={props.style}
        ref={props.ref}
    >
        {props.children}
    </div>
)

export default Aux