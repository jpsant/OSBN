import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './css/fullpost.module.css'

import Title from '../transitionDiv/history/historyDiv';
import Image from '../galleryImage/galleryImage';
import Modal from '../modal/modal';
import Backdrop from '../backDrop/backDrop';

class FullPost extends Component {

    state = {
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
        return (
            <div style={{backgroundColor: '#b05f24'}}>
                <Title bgColor="#c76d2b" title={this.props.title} />
                <div className={classes.postContainer}>
                    <div className={classes.imageContainer}>
                        <Image image={this.props.image} clicked={() => this.openHandler(this.props.image)}/>
                    </div>
                    <div className={classes.textContainer}>
                        <h2>{this.props.text}</h2>
                        <NavLink to="/" className={classes.Button}>{this.props.language === 'portuguese' ? '& Voltar' : 
                        this.props.language === 'english' ? '& Home' : 
                        this.props.language === 'french' ? '& Retour' : null}</NavLink>
                    </div>
                </div>
                <Backdrop show={this.state.showModal} clicked={this.closeHandler} />
                <Modal show={this.state.showModal}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img} alt="" src={this.state.image}></img>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default FullPost;