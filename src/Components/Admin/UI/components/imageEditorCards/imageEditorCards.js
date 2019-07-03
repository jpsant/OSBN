import React from 'react';
import classes from './css/imageEditorCards.module.css';

const imageEditorCards = (props) => {
    return (
        <div className={classes.container} onClick={props.clicked}>
            <img className={classes.image} alt="#" src={props.image}></img>
        </div>
    );
}

export default imageEditorCards;