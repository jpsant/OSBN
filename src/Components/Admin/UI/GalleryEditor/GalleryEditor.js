import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';

import classes from './css/GalleryEditor.module.css';
import './css/galleryAnimations.css';

import ImageContainer from '../components/imageEditorCards/imageEditorCards';
import Modal from '../../../UI/modal/modal';
import BackDrop from '../../../UI/backDrop/backDrop';

class GalleryEditor extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/galeria.json')
            .then(response => {
                this.setState({ gallery: response.data });
            })
    }

    state = {
        gallery: null,
        image: null,
        showImageModal: false,
        showFormModal: false
    }

    formHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            showFormModal: !prevState.showFormModal
        }))
    }

    imgHandler = (imagem) => {
        this.setState(prevState => ({
            showImageModal: !prevState.showImageModal,
            image: imagem
        }))
    }

    render() {
        let images = null;
        if (this.state.gallery !== null) {
            let image = this.state.gallery;
            images = image.map(item => {
                return <ImageContainer clicked={() => this.imgHandler(item.imagem)} key={item.id} image={item.imagem} />
            })
        }

        return (
            <>
                <div className={classes.buttonsDiv}>
                    <button className={classes.returnButton} onClick={this.props.clicked}>Voltar</button>
                    <button className={classes.addButton} onClick={this.formHandler}>Adicionar Imagem</button>
                </div>
                <div className={classes.container}>
                    <div className={classes.titleContainer}>
                        <h1>Editor da Galeria!</h1>
                        <h2>Adicione imagens para a galeria ou Remova alguma imagem:</h2>
                    </div>
                    <div className={classes.contentContainer}>
                        {images}
                    </div>
                </div>


                <CSSTransition in={this.state.showImageModal}
                    classNames="news"
                    unmountOnExit
                    onExit={() => this.setState({ showImageModal: false })}
                    timeout={500}
                >
                    <div>
                        <BackDrop clicked={this.imgHandler} show={this.state.showImageModal} />
                        <Modal show={this.state.showImageModal}>
                            <div className={classes.modalContainer}>
                                <div className={classes.modalImage}>
                                    <img className={classes.image} alt="" src={this.state.image}></img>
                                </div>
                                <div className={classes.modalButtons}>
                                    <button className={classes.button}>Remover Imagem</button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </CSSTransition>

                <CSSTransition in={this.state.showFormModal}
                    classNames="news"
                    unmountOnExit
                    onExit={() => this.setState({ showFormModal: false })}
                    timeout={500}
                >
                    <div>
                        <BackDrop clicked={this.formHandler} show={this.state.showFormModal} />
                        <Modal show={this.state.showFormModal}>
                            <div className={classes.formModalContainer}>
                                <h1>formModal!</h1>
                            </div>
                        </Modal>
                    </div>
                </CSSTransition>
            </>
        )
    }
}

export default GalleryEditor;