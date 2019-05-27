import React, { Component } from 'react';
import classes from './css/GallerySection.module.css';
import { connect } from 'react-redux';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import GalleryImage from '../../UI/galleryImage/galleryImage';

class GallerySection extends Component {
    render() {
        return (
            <div className={classes.container}>
                <TransitionDiv title={this.props.language === 'portuguese' ? '& Galeria' :
                    this.props.language === 'english' ? '& Gallery' : this.props.language === 'french' ? '& Galerie' : ''} />
                <div className={classes.galleryContainer}>
                    <GalleryImage />
                    <GalleryImage />
                    <GalleryImage />
                    <GalleryImage />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(GallerySection);