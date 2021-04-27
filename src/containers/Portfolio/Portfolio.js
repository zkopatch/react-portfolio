import React, { Component } from 'react';

import classes from './Portfolio.module.css';
import Welcome from '../../components/Welcome/Welcome';
import AboutMe from '../../components/AboutMe/AboutMe';
import Contact from '../../components/Contact/Contact';

class Portfolio extends Component {
    render(){
        return(
            <div className={classes.Portfolio}>
                <Welcome />
                <AboutMe />
                <Contact />
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
                <h1>This is the portfolio</h1>
            </div>
        );
    }
}

export default Portfolio;