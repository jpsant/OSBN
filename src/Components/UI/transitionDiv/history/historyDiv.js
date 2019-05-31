import React from 'react';
import classes from './css/historyDiv.module.css'

const historyDiv = (props) => {
    return (
        <>
            <div className={classes.container}>
                <img src={require('../../../../assets/OSBNBORDAS/full.png')} alt="" className={classes.leftBorder}></img>
                <h1 className={classes.title}> {props.title}</h1>
                <img src={require('../../../../assets/OSBNBORDAS/full.png')} alt="" className={classes.rightBorder}></img>
            </div>
        </>
    );
}

export default historyDiv;