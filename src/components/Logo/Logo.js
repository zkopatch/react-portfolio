import React from 'react';

import myLogo from '../../assets/images/logo.svg';
import classes from './Logo.module.css';
import Aux from '../../hoc/Aux/Aux';

const logo = (props) => (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={myLogo} alt="MyLogo" />
        </div>
);

export default logo;