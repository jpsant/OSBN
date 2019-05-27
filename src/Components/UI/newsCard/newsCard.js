import React from 'react';
import classes from './css/newsCard.module.css';

const newsCard = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <h2>image</h2>
            </div>
            <div className={classes.titleContainer}>
                <h1>{props.title}</h1>
            </div>
            <div className={classes.subTitleContainer}>
                <h1>{props.date}</h1>
            </div>
            <div className={classes.content}> 
                <h2 className={classes.contentText}>{props.content}</h2>
                <a className={classes.redirect}>{props.language === 'portuguese' ? 'Continuar lendo→' : 
                props.language === 'english' ? 'Continue reading→' : 
                props.language === 'french' ? 'Continuer la lecture→' : ''}</a>
            </div>
        </div>
    );
}

export default newsCard;