import React from 'react';

import classes from './css/scheduleDiv.module.css';

const scheduleDiv = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.date}>
                <h1>{props.date}</h1>
            </div>
            <div className={classes.event}>
                <h2>{props.event}</h2>
            </div>
            <div className={classes.local}>
                <h2>{props.local}</h2>
            </div>
        </div>
    );
}

export default scheduleDiv;