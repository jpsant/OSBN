import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Helmet from 'react-helmet';

import classes from './css/Gallery.module.css';

import TransitionDiv from '../UI/transitionDiv/history/historyDiv';
import GalleryContent from '../UI/galleryContent/galleryContent';
import GalleryPanel from '../UI/galleryPanel/galleryPanel';
import Modal from '../UI/modal/modal';
import Backdrop from '../UI/backDrop/backDrop';

class Gallery extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/galeria.json')
            .then(response => {
                this.setState({ images: response.data })
            })
        axios.get('https://osbn-a36f9.firebaseio.com/clipping.json')
            .then(response => {
                this.setState({ clipping: response.data })
            })
    }

    state = {
        images: null,
        clipping: null,
        showModal: false,
        image: null
    }

    openHandler = (image) => {
        this.setState({ showModal: true, image: image })
    }

    closeHandler = () => {
        this.setState({ showModal: false, image: null });
    }

    render() {

        let images = null;
        if (this.state.images) {
            let image = this.state.images;
            images = image.map(image => {
                return <GalleryContent clicked={() => this.openHandler(image.imagem)} key={image.key} image={image.imagem} />
            })
        }

        let clipping = null;
        if (this.state.clipping) {
            let image = this.state.clipping;
            clipping = image.map(image => {
                return <GalleryPanel clicked={() => this.openHandler(image.imagem)} key={image.key} image={image.imagem} />
            })
        }

        return (
            <>
                <Helmet>
                    <title>Orquestra Sanfônica Balaio Nordeste Galeria</title>
                    <meta name="description" content="Galeria de Imagens da Orquestra Sanfônica Balaio Nordeste"></meta>
                    <meta name="robots" content="all" />
                    <meta name="googlebot" content="all" />
                </Helmet>
                <div style={{ backgroundColor: '#b05f24' }}>
                    <TransitionDiv show={true} bgColor="#c76d2b" title={this.props.language === 'portuguese' ? 'Galeria' :
                        this.props.language === 'english' ? 'Gallery' :
                            this.props.language === 'french' ? 'Galerie' : ''} />
                    <div className={classes.galleryContainer}>
                        <div className={classes.galleryContent}>
                            {images}
                        </div>
                        <div className={classes.clipping}>
                            <div className={classes.title}>
                                <TransitionDiv show={true} bgColor="#c76d2b" title="Clipping" />
                            </div>
                            <div className={classes.image}>
                                {clipping}
                            </div>
                        </div>
                        <NavLink className={classes.button} to="/">{this.props.language === 'portuguese' ? '& Início' :
                            this.props.language === 'english' ? '& Home' : this.props.language === 'french' ? '& Début' : ''}</NavLink>
                    </div>
                </div>
                <Backdrop show={this.state.showModal} clicked={this.closeHandler} />
                <Modal show={this.state.showModal}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img} alt="" src={this.state.image}></img>
                    </div>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(Gallery);