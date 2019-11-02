import React, { Component } from 'react';
import classes from './css/HeroSection.module.css';
import video from '../../../assets/videos/teste.mp4';

import LanguageSelector from '../../UI/languageSelector/languageSelector';
import LoadingScreen from '../../UI/loadingScreen/loadingScreen';
import AnimatedLogo from '../../UI/heroLogo/heroLogo';

class HeroSection extends Component {

    componentDidMount() {
        window.addEventListener('load', this.pageLoad);
        this.setState({ video: video })
    }

    pageLoad = () => {
        this.setState({ loading: document.readyState });
    }

    state = {
        language: null,
        loading: document.readyState,
        video: null
    }


    render() {
        return (
            <>
                <LoadingScreen show={document.readyState === 'loading' ? true : false} />
                <LanguageSelector />
                <div className={classes.heroContainer} id="container">
                    <h1 className={classes.firstTitle}>Orquestra Sanfônica</h1>
                    <h1 className={classes.secondTitle}>Balaio Nordeste</h1>
                    <AnimatedLogo show={document.readyState === 'loading' ? true : false} />
                    <div className={classes.container}>
                        <video className={classes.video} autoPlay="autoplay" loop="loop" muted playsInline poster={require('../../../assets/svgs/poster.JPG')}>
                            <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </>
        )
    }
}

export default HeroSection;

