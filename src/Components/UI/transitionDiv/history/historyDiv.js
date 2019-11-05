import React from 'react';
import classes from './css/historyDiv.module.css'

import Right from '../../animatedRightArch/rightArch';
import Left from '../../animatedLeftArch/leftArch';

import { Fade } from 'react-reveal';


const HistoryDiv = (props) => {


    return (
        <>
            <div className={classes.container} style={{ backgroundColor: props.bgColor }}>
                <Left show={props.show} />
                <Fade bottom delay={200} duration={1100}>
                    <span className={classes.hat}>&</span>
                </Fade>
                <Fade duration={1500}>
                    <h1 className={classes.title}> {props.title}</h1>
                </Fade>
                <Right show={props.show} />
            </div>
        </>
    );
}

export default HistoryDiv;