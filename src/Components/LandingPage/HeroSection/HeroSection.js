import React, { Component } from 'react';
import classes from './css/HeroSection.module.css';
import vide from 'vide';
import $ from 'jquery';

import video from './teste.mp4'

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
                <div className={classes.heroContainer}>
                    <h1 className={classes.firstTitle}>Orquestra Sanfônica</h1>
                    <h1 className={classes.secondTitle}>Balaio Nordeste</h1>
                    <img className={classes.logo} alt="" src={require('../../../assets/logo.svg')}></img>
                    <div ref="video" data-vide-bg={video} data-vide-options="loop: true, muted: true" className={classes.container}></div>
                </div>
            </>
        )
    }
}


export default HeroSection;

