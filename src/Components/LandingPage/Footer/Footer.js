import React, { Component } from 'react';
import classes from './css/Footer.module.css';

class Footer extends Component {
    render () {
        return (
            <div className={classes.footerContainer}>
                <h1>Footer!</h1>
            </div>
        )
    }
}

export default Footer;