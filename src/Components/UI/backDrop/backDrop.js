import React from 'react';
import classes from './css/backdrop.module.css';

const backDrop = (props) => {
    return (
        props.show ? <div className={classes.Backdrop} style={{opacity: '1', width: '100%'}} onClick={props.clicked} ></div> : <div className={classes.Backdrop} style={{opacity: '0', width: '0%'}} onClick={props.clicked} ></div>
    );
}

export default backDrop;