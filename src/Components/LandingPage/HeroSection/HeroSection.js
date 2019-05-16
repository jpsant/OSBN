import React, { Component } from 'react';
import classes from './css/HeroSection.module.css';
import vide from 'vide';
import $ from 'jquery';

import image from './teste.mp4'

class HeroSection extends Component {

    componentDidMount() {
        this.initVide();
    }

    initVide = () => {
       $(this.refs.video).data(vide);
    }

    render() {
        return (
            <>
                <div ref="video" data-vide-bg={image} data-vide-options="loop: true, muted: true, position: 50% 50%" className={classes.heroContainer}>
                    <h1 className={classes.title}>PEEEGA NA MINHA POMBA MIZERAAAAAAAAAAA!</h1>
                </div>
            </>
        )
    }
}


export default HeroSection;