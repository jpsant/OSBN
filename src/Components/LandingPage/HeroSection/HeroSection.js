import React, { Component } from 'react';
import classes from './css/HeroSection.module.css';
import vide from 'vide';
import $ from 'jquery';

import video from '../../../assets/videos/teste.mp4';
import SideMenu from '../../UI/sideMenu/sideMenu';
import LanguageSelector from '../../UI/languageSelector/languageSelector';

class HeroSection extends Component {

    componentDidMount() {
        this.initVide();
        window.addEventListener('scroll', this.handleScroll);

    }

    initVide = () => {
        $(this.refs.video).data(vide);
    }

    handleScroll = (e) => {
        if ((document.documentElement.scrollTop >= 1550)) {
            if (this.state.menu !== true) {
                this.setState({ menu: true });
            }
            if (document.documentElement.offsetHeight >= 1887) {
                if (this.state.section !== 'history') {
                    this.setState({ section: 'history' })
                }
            }
            if (document.documentElement.scrollTop >= 3370) {
                if (this.state.section !== 'gallery') {
                    this.setState({ section: 'gallery' })
                }
            }
            if (document.documentElement.scrollTop >= 4000) {
                if (this.state.section !== 'schedule') {
                    this.setState({ section: 'schedule' })
                }
            }
            if (document.documentElement.scrollTop >= 4900) {
                if (this.state.section !== 'news') {
                    this.setState({ section: 'news' })
                }
            }
            if (document.documentElement.scrollTop >= 5422) {
                if (this.state.section !== 'technical') {
                    this.setState({ section: 'technical' })
                }
            }
            if (document.documentElement.scrollTop >= 6700) {
                if (this.state.section !== 'contact') {
                    this.setState({ section: 'contact' })
                }
            }

        } else {
            if (this.state.menu !== false) {
                this.setState({ menu: false })
            }
        }
    }

    state = {
        language: null,
        menu: false,
        section: ''
    }

    render() {
        return (
            <>
                <LanguageSelector />
                <SideMenu show={this.state.menu} section={this.state.section} />
                <div className={classes.heroContainer} id="container">
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

