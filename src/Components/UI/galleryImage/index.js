import React from 'react';
import { Fade } from 'react-reveal';

import './styles.scss';

const galleryImage = (props) => {
    return (
        <>
            <Fade delay={400} duration={1000}>
                <div onClick={props.clicked} className="gallery-image-container">
                    <img alt="" className="gallery-image-container-image" src={props.image}></img>
                </div>
            </Fade>
        </>
    );
}

export default galleryImage;