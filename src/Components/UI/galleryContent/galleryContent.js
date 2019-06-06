import React, { Component } from 'react';
import classes from './css/galleryContent.module.css';

class GalleryContent extends Component {
    render() {
        return (
            <div onClick={this.props.clicked} className={classes.item}>
                <div className={classes.content}>
                    <img src={this.props.image} alt="" className={classes.img}></img>
                </div>
            </div>
        );
    }
}

export default GalleryContent;