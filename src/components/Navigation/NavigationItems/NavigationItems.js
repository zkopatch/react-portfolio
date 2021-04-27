import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <div className={classes.NavigationItems}>
        <NavigationItem title="Home" />
        <NavigationItem title="About Me" />
        <NavigationItem title="Contact" />
    </div>
)

export default navigationItems;