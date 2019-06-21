import React from 'react';
import classes from './css/spinner.module.css';

const spinner = () => {
    return (
        <div className={classes.loading}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default spinner;