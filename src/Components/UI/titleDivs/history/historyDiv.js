import React from 'react';
import classes from './css/historyDiv.module.css'

const historyDiv = (props) => {
    return (
        <>
            <div className={classes.container}>
                <h1 className={classes.title}> {props.title}</h1>
            </div>
        </>
    );
}

export default historyDiv;