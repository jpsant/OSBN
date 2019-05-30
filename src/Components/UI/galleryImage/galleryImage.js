import React from 'react';
import classes from './css/galleryImage.module.css'

const galleryImage = (props) => {
    return (
        <div onClick={props.clicked} className={classes.container}>
            <img className={classes.image} src={props.image}></img>
        </div>
    );
}

export default galleryImage;