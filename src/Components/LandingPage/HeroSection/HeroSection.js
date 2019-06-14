import React, { Component } from 'react';
import classes from './css/HeroSection.module.css';
import video from '../../../assets/videos/teste.mp4';

import LanguageSelector from '../../UI/languageSelector/languageSelector';
import LoadingScreen from '../../UI/loadingScreen/loadingScreen';

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
                    <img className={classes.logo} alt="" src={require('../../../assets/logo6.png')}></img>
                    <div className={classes.container}>
                        <video className={classes.video} autoplay="autoplay" loop="loop" muted defaultMuted playsinline poster={require('../../../assets/svgs/poster.JPG')}>
                            <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Fteste.mp4?alt=media&token=10610a76-1f88-45bc-82ae-00960fe06e3a'} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </>
        )
    }
}

export default HeroSection;

