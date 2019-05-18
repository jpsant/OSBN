import React, { Component } from 'react';
import classes from './css/GallerySection.module.css';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import GalleryImage from '../../UI/galleryImage/galleryImage';

class GallerySection extends Component {
    render() {
        return (
            <>
                <TransitionDiv title="& Galeria" />
                <div className={classes.galleryContainer}>
                    <GalleryImage />
                    <GalleryImage />
                    <GalleryImage />
                    <GalleryImage />
                </div>
            </>
        )
    }
}

export default GallerySection;