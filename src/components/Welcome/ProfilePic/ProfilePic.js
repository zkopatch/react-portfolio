import React from 'react';

import profPic from '../../../assets/images/profile.jpeg';
import classes from './ProfilePic.module.css';

const profilePic = (props) => (
    <div className={classes.ProfilePic} >
        <img src={profPic} alt="MyLogo" />
    </div>
);

export default profilePic;