import React from 'react';

import classes from './Bubble.module.css';

const bubble = (props) => (
    <div className={classes.Bubble}>
        {props.children}
    </div>
)

export default bubble;