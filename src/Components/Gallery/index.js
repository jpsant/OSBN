import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Helmet from 'react-helmet';

import './styles.scss';

import TransitionDiv from '../UI/transitionDiv'
import GalleryContent from '../UI/galleryContent/galleryContent';
import GalleryPanel from '../UI/galleryPanel/galleryPanel';
import Modal from '../UI/modal/modal';
import Backdrop from '../UI/backDrop';

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
                    <div className="gallery-container">
                        <div className="gallery-container-galleryContent">
                            {images}
                        </div>
                        <div className="gallery-container__clipping">
                            <div className="gallery-container__clipping-title">
                                <TransitionDiv show={true} bgColor="#c76d2b" title="Clipping" />
                            </div>
                            <div className="gallery-container__clipping-image">
                                {clipping}
                            </div>
                        </div>
                        <NavLink className="gallery-container-button" to="/">{this.props.language === 'portuguese' ? '& Início' :
                            this.props.language === 'english' ? '& Home' : this.props.language === 'french' ? '& Début' : ''}</NavLink>
                    </div>
                </div>
                <Backdrop show={this.state.showModal} clicked={this.closeHandler} />
                <Modal show={this.state.showModal}>
                    <div className="gallery-image-container">
                        <img className="gallery-image-container-img" alt="" src={this.state.image}></img>
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