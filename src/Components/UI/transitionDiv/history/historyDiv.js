import React from 'react';
import classes from './css/historyDiv.module.css'

import { Fade } from 'react-reveal';

const historyDiv = (props) => {
    return (
        <>
            <div className={classes.container} style={{backgroundColor: props.bgColor}}>
                <img src={require('../../../../assets/OSBNBORDAS/full2.png')} alt="" className={classes.leftBorder}></img>
                <span className={classes.hat}>&</span>
                <h1 className={classes.title}> {props.title}</h1>
                <img src={require('../../../../assets/OSBNBORDAS/full2.png')} alt="" className={classes.rightBorder}></img>
            </div>
        </>
    );
}

export default historyDiv;