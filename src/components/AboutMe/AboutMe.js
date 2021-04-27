import React from 'react';

import classes from './AboutMe.module.css';
import Bubble from '../../hoc/Bubble/Bubble';

const aboutMe = (props) => (
    <Bubble>
    <div className={classes.AboutMe}>
        <h1 className={classes.Title}>About Me:</h1>
        <p><em>Hi, My name is Zachary Kopatch!</em></p>
        <p> 
            I am a creative and innovative thinker that enjoys solving complex puzzles
            and creating unique user experiences. I have a background working in 
            Enterprise MES software development, with experience across the stack in
            terms of development. These days I find myself mostly working in JavaScript 
            and C#, although I am always enthusiastic about exploring with new tools 
            and languages. If you are looking for a Software Developer with a Systems
            -thinking approach and an eye for design, then you have come to the right page!
        </p>
    </div>
    </Bubble>
)

export default aboutMe;