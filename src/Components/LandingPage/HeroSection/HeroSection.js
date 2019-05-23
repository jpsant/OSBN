import React, { Component } from 'react';
import classes from './css/HeroSection.module.css';
import vide from 'vide';
import $ from 'jquery';

import video from '../../../assets/videos/teste.mp4';
import SideMenu from '../../UI/sideMenu/sideMenu';

class HeroSection extends Component {

    componentDidMount() {
        this.initVide();
        window.onscroll = () => this.handleScroll();
    }

    initVide = () => {
        $(this.refs.video).data(vide);
    }

    handleScroll = () => {
        if (document.documentElement.scrollTop > 1760) {
            if (this.state.menu !== true)
            this.setState({menu: true});
        } else {
            if(this.state.menu !== false) {
                this.setState({menu: false})
            }
        }
    }

    state = {
        language: null,
        menu: false
    }
    
    render() {
        return (
            <>
                <SideMenu show={this.state.menu} />
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

