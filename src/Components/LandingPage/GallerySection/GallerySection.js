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
        this.setState({show: true})
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
                            <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Ffoto%20-%20divulga%C3%A7%C3%A3o%2010.png?alt=media&token=62777d47-c975-4e8a-8aeb-b64b614e4c7b')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Ffoto%20-%20divulga%C3%A7%C3%A3o%2010.png?alt=media&token=62777d47-c975-4e8a-8aeb-b64b614e4c7b" />
                            <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%209.png?alt=media&token=cbb0aad7-60b2-4c41-b04c-648132d162b0')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%209.png?alt=media&token=cbb0aad7-60b2-4c41-b04c-648132d162b0" />
                            <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-divulga%C3%A7%C3%A3o%205.png?alt=media&token=69cb31b9-80ad-4bdb-9649-c89850d96477')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-divulga%C3%A7%C3%A3o%205.png?alt=media&token=69cb31b9-80ad-4bdb-9649-c89850d96477" />
                            <GalleryImage clicked={() => this.openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=7f4729b3-8256-44b7-9cb1-0ef5e2a0dcb6')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.png?alt=media&token=7f4729b3-8256-44b7-9cb1-0ef5e2a0dcb6" />
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