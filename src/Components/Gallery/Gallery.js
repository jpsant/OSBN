import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import classes from './css/Gallery.module.css';

import LanguageSelector from '../UI/languageSelector/languageSelector';
import TransitionDiv from '../UI/transitionDiv/history/historyDiv';
import GalleryContent from '../UI/galleryContent/galleryContent';
import GalleryImage from '../UI/galleryImage/galleryImage';

class Gallery extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/galeria.json')
        .then(response => {
            this.setState({images: response.data})
        })
        axios.get('https://osbn-a36f9.firebaseio.com/clipping.json')
        .then(response => {
            this.setState({clipping: response.data})
        })
    }

    state = {
        images: null,
        clipping: null
    }

    render() {

        let images = null;
        if(this.state.images) {
            let image = this.state.images;
            images = image.map(image => {
                return <GalleryContent key={image.key} image={image.imagem} />
            })
        }

        let clipping = null;
        if (this.state.clipping) {
            let image = this.state.clipping;
            clipping = image.map(image => {
                return <GalleryImage style={{heigth: '50%'}} image={image.imagem} />
            })
        }
        
        return (
            <div style={{ backgroundColor: '#AB7C44'}}>
                <LanguageSelector />
                <div className={classes.galleryContainer}>
                    <div className={classes.titleContainer}>
                        <TransitionDiv title={this.props.language === 'portuguese' ? '& Galeria !' :
                            this.props.language === 'english' ? '& Gallery !' :
                                this.props.language === 'french' ? '& Galerie !' : ''} />
                    </div>
                    <div className={classes.galleryContent}>
                        {images}
                    </div>
                    <TransitionDiv title="& Clipping" />
                    <div className={classes.clipping}>
                        {clipping}
                    </div>
                    <NavLink to="/" >voltar</NavLink>
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

export default connect(mapStateToProps)(Gallery);