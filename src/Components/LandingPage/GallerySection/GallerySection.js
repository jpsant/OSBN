import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/actioncreators';

import classes from './css/GallerySection.module.css';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';
import GalleryImage from '../../UI/galleryImage/galleryImage';
import Backdrop from '../../UI/backDrop/backDrop';
import Modal from '../../UI/modal/modal';

class GallerySection extends Component {

    state = {
        showModal: false,
        image: null,
        show: false
    }

    onShow(entries) {
        this.props.changeSection('gallery');
        this.setState({ show: true })
    }


    openHandler = (image) => {
        this.setState({ showModal: true, image: image })
    }

    closeHandler = () => {
        this.setState({ showModal: false, image: null });
    }

    render() {
        return (
            <>
                <IntersectionVisible onShow={e => this.onShow(e)}>
                    <div ref={this.props.forwardRef} className={classes.container}>
                        <TransitionDiv show={this.state.show} bgColor="#b69c00" title={this.props.language === 'portuguese' ? 'Galeria' :
                            this.props.language === 'english' ? 'Gallery' : this.props.language === 'french' ? 'Galerie' : ''} />
                            <div className={classes.galleryContainer}>
                                <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.webp?alt=media&token=63866687-25b3-4639-9388-c78328d734ee')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.webp?alt=media&token=63866687-25b3-4639-9388-c78328d734ee" />
                                <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%209.webp?alt=media&token=3f65d9c6-20b3-4836-8081-724b7611edbf')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%209.webp?alt=media&token=3f65d9c6-20b3-4836-8081-724b7611edbf" />
                                <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-divulga%C3%A7%C3%A3o%205.webp?alt=media&token=651e1cb5-ddc8-42ac-a45a-e9fb572af54a')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-divulga%C3%A7%C3%A3o%205.webp?alt=media&token=651e1cb5-ddc8-42ac-a45a-e9fb572af54a" />
                                <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Ffoto%20-%20divulga%C3%A7%C3%A3o%2010.webp?alt=media&token=8a867fc4-f8d3-4880-91dc-c8d83472b2bf')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Ffoto%20-%20divulga%C3%A7%C3%A3o%2010.webp?alt=media&token=8a867fc4-f8d3-4880-91dc-c8d83472b2bf" />
                            </div>
                        <NavLink to="/gallery" className={classes.galleryButton}>{this.props.language === 'portuguese' ? 'Ir para Galeria!' :
                            this.props.language === 'english' ? 'Visit the Gallery!' :
                                this.props.language === 'french' ? 'Aller à la galerie!' : ''}</NavLink>
                    </div>
                    <Backdrop show={this.state.showModal} clicked={this.closeHandler} />
                    <Modal show={this.state.showModal}>
                        <div className={classes.imgContainer}>
                            <img className={classes.img} alt="" src={this.state.image}></img>
                        </div>
                    </Modal>
                </IntersectionVisible>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSection: (section) => dispatch(actions.changeSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GallerySection);