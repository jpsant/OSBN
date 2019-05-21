import React from 'react';
import classes from './css/table.module.css';

const table = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.music}>
                <h2>{props.music}</h2>
            </div>
            <div className={classes.composer}>
                <h2>{props.composer}</h2>
            </div>
        </div>
    )
}

export default table;