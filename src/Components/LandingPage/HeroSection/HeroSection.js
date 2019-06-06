import React, { Component } from 'react';
import classes from './css/HeroSection.module.css';
import video from '../../../assets/videos/teste.mp4';

import SideMenu from '../../UI/sideMenu/sideMenu';
import LanguageSelector from '../../UI/languageSelector/languageSelector';
import LoadingScreen from '../../UI/loadingScreen/loadingScreen';

class HeroSection extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('load', this.pageLoad);
        this.setState({ video: video })
    }

    pageLoad = () => {
        this.setState({ loading: document.readyState });
    }

    state = {
        language: null,
        menu: false,
        loading: document.readyState,
        video: null
    }


    handleScroll = (e) => {
        if ((document.documentElement.scrollTop >= 1550)) {
            if (this.state.menu !== true) {
                this.setState({ menu: true });
            }
            // if (document.documentElement.offsetHeight >= 1887) {
            //     if (this.state.section !== 'history') {
            //         this.setState({ section: 'history' })
            //     }
            // }
            // if (document.documentElement.scrollTop >= 3370) {
            //     if (this.state.section !== 'gallery') {
            //         this.setState({ section: 'gallery' })
            //     }
            // }
            // if (document.documentElement.scrollTop >= 4000) {
            //     if (this.state.section !== 'schedule') {
            //         this.setState({ section: 'schedule' })
            //     }
            // }
            // if (document.documentElement.scrollTop >= 4900) {
            //     if (this.state.section !== 'news') {
            //         this.setState({ section: 'news' })
            //     }
            // }
            // if (document.documentElement.scrollTop >= 5422) {
            //     if (this.state.section !== 'technical') {
            //         this.setState({ section: 'technical' })
            //     }
            // }
            // if (document.documentElement.scrollTop >= 6700) {
            //     if (this.state.section !== 'contact') {
            //         this.setState({ section: 'contact' })
            //     }
            // }

        } else {
            if (this.state.menu !== false) {
                this.setState({ menu: false })
            }
        }
    }

    render() {
        return (
            <>
                <LoadingScreen show={document.readyState === 'loading' ? true : false} />
                <LanguageSelector />
                <SideMenu show={this.state.menu}/>
                <div className={classes.heroContainer} id="container">
                    <h1 className={classes.firstTitle}>Orquestra Sanfônica</h1>
                    <h1 className={classes.secondTitle}>Balaio Nordeste</h1>
                    <img className={classes.logo} alt="" src={require('../../../assets/logo.svg')}></img>
                    <div className={classes.container}>
                        <video className={classes.video} autoPlay loop muted>
                            <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Fteste.mp4?alt=media&token=10610a76-1f88-45bc-82ae-00960fe06e3a'} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </>
        )
    }
}

export default HeroSection;

