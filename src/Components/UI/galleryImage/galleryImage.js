import React from 'react';
import classes from './css/galleryImage.module.css'

import { Fade } from 'react-reveal';

const galleryImage = (props) => {
    return (
        <>
            <Fade delay={400} duration={1000}>
                <div onClick={props.clicked} className={classes.container}>
                    <img alt="" className={classes.image} src={props.image}></img>
                </div>
            </Fade>
        </>
    );
}

export default galleryImage;