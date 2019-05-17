import React from 'react';
import './color-card.css';

import Aux from '../hoc/auxilary';
import ColorSlot from '../color-slot/color-slot';

const ColorCard = props => (
    <Aux
        className="color-card-main"
    >
        <div
            className="color-card-slots"
        >
            <ColorSlot />
            <ColorSlot />
            <ColorSlot />
            <ColorSlot />
            <ColorSlot />
            <ColorSlot />
            <ColorSlot />
            <ColorSlot />
            <ColorSlot />

        </div>

        <div
            className="color-card-funcs"
        >
            <span
                className="color-function"
            >
                <i className="fas fa-file-export"></i>
            </span>

            <span
                className="color-function"
            >
                <i className="fas fa-copy"></i>
            </span>

            <span
                className="color-function"
            >
                <i className="fas fa-heart"></i>
            </span>

            <span
                className="color-owner"
            >
                <p>owner usernme swf</p>
            </span>

        </div>
    </Aux>
)

export default ColorCard;