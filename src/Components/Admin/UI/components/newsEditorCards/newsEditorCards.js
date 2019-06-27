import React from 'react';
import classes from './css/newsEditorCards.module.css'

const newsEditorCards = (props) => {
    return (
        <div onClick={props.clicked} className={classes.container}>
            <div className={classes.titleContainer}>
                <h1>{props.title}</h1>
            </div>
            <div className={classes.contentContainer}>
                <h2>{props.content}</h2>
            </div>
        </div>
    );
}

export default newsEditorCards;