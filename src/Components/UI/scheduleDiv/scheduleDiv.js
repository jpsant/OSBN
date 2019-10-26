import React from 'react';

import classes from './css/scheduleDiv.module.css';
import { Link } from 'react-router-dom';

const scheduleDiv = (props) => {
    return (
        <a href={props.link} className={classes.container}>
            <div className={classes.date}>
                <h1>{props.date}</h1>
            </div>
            <div className={classes.event}>
                <h2>{props.event}</h2>
            </div>
            <div className={classes.local}>
                <h2>{props.local}</h2>
            </div>
        </a>
    );
}

export default scheduleDiv;