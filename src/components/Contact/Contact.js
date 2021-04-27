import React from 'react';

import classes from './Contact.module.css';
import Bubble from '../../hoc/Bubble/Bubble';

const contact = () => (
    <Bubble>
    <div className={classes.Contact}>
        <h1 className={classes.Title}>Contact Information:</h1>
        <ul>
                    <li><span className={classes.SubTitle}>Email:</span><a href="/contact/index.html"> zkopatch@gmail.com</a></li>
                    <li><span className={classes.SubTitle}>GitHub:</span><a href="https://github.com/zkopatch"> github.com/zkopatch</a></li>
                    <li><span className={classes.SubTitle}>LinkedIn:</span><a href="https://www.linkedin.com/in/zkopatch/">     linkedin.com/in/zkopatch/</a></li>
        </ul>
    </div>
    </Bubble>
)

export default contact;