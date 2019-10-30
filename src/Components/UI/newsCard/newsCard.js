import React from 'react';
import classes from './css/newsCard.module.css';
import { NavLink } from 'react-router-dom';

const newsCard = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.img} alt=""></img>
            </div>
            <div className={classes.titleContainer}>
                <h1>{props.title}</h1>
                <h2>{props.date}</h2>
            </div>
            <div className={classes.content}>
                <h2 className={classes.contentText}>{props.content}</h2>
                <div className={classes.contentButton}>
                    {props.disabled ? 
                    <NavLink className={classes.redirect}>{props.language === 'portuguese' ? 'Continuar lendo→' :
                        props.language === 'english' ? 'Continue reading→' :
                            props.language === 'french' ? 'Continuer la lecture→' : 'Continuar lendo→'}</NavLink> : 
                            <NavLink to={"/news/" + props.id} className={classes.redirect}>{props.language === 'portuguese' ? 'Continuar lendo→' :
                        props.language === 'english' ? 'Continue reading→' :
                            props.language === 'french' ? 'Continuer la lecture→' : 'Continuar lendo→'}</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default newsCard;