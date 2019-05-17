import React from 'react';
import './colors.css';

import Aux from '../hoc/auxilary';
import ColorCard from '../color-card/color-card';

const Colors = props => {
    return (
        <Aux
            className="colors-main"
        >
            <ColorCard />
            <ColorCard />
            <ColorCard />

        </Aux>
    )
}

export default Colors