import React, { Component } from 'react';
import './styles.scss';
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
                <LanguageSelector show={0} />
                <div className="heroContainer" id="container">
                    <h1 className="heroContainer__firstTitle">Orquestra Sanfônica</h1>
                    <h1 className="heroContainer__secondTitle">Balaio Nordeste</h1>
                    <AnimatedLogo show={document.readyState === 'loading' ? true : false} />
                    <div className="heroContainer__container">
                        <video className="heroContainer__container-video" autoPlay="autoplay" loop="loop" muted playsInline poster={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=38d4a012-ac89-4d9d-bdad-160ced9e022b'}>
                            <source src={'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/videos%2Forquestra2.mp4?alt=media&token=bf248dca-0c2b-4738-99d6-0aee3e27d860'} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </>
        )
    }
}

export default HeroSection;

