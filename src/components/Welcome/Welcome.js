import React from 'react';

import ProfilePic from './ProfilePic/ProfilePic';
import Bubble from '../../hoc/Bubble/Bubble';
import classes from './Welcome.module.css';

const Welcome = () => (
    <Bubble>
        <div className={classes.Welcome}>
            <h1 className={classes.Greeting}><span className={classes.Title}>Hi there!</span><br/><br/> Welcome to my page!</h1>
            <ProfilePic />
        </div>
    </Bubble>
)

export default Welcome;