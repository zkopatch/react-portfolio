import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import LogoSignature from '../../Logo/LogoSignature/LogoSignature';
import Logo from '../../Logo/Logo';

import classes from './Toolbar.module.css';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <div className={classes.LogoSection}>
                <Logo />
                <LogoSignature />
            </div>
            
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;