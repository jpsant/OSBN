import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import axios from 'axios';
import uniqid from 'uniqid';

import * as actions from '../../../../store/actions/actioncreators';

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
        showFormModal: false,
        selectedImage: null,
        imgPosition: null
    }

    submitImage = (event) => {
        event.preventDefault();

        let imagePost = {
            nome: null,
            key: uniqid('img-'),
            imagem: null
        }

        let image = this.state.selectedImage;
        this.props.submitImage(image, imagePost);
    }

    removeImage = (event) => {
        event.preventDefault();
        let position = this.state.imgPosition;
        this.props.removeImage(position);
    }

    formHandler = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            showFormModal: !prevState.showFormModal
        }))
    }

    imgHandler = (imagem, position) => {
        this.setState(prevState => ({
            showImageModal: !prevState.showImageModal,
            image: imagem,
            imgPosition: position
        }))
    }

    render() {
        let images = null;
        if (this.state.gallery !== null) {
            let image = this.state.gallery;
            images = image.map((item, index) => {
                return <ImageContainer clicked={() => this.imgHandler(item.imagem, index)} key={item.key} image={item.imagem} />
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
                                    <button onClick={this.removeImage} className={classes.button}>Remover Imagem</button>
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
                                <div className={classes.titleContainer}>
                                    <h1>Adicionar Nova imagem</h1>
                                    <h2>Selecione a imagem que você deseja adicionar:</h2>
                                </div>
                                <div className={classes.buttonsContainer}>
                                    <div className={classes.selector}>
                                        <label htmlFor='file'>Selecionar Imagem</label>
                                        <input onChange={(e) => this.setState({ selectedImage: e.target.files[0] })} type="file" id="file" name="file"></input>
                                    </div>
                                    <div className={classes.submit}>
                                        <button onClick={this.submitImage} className={classes.button}>Enviar!</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </CSSTransition>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.postReducer.loading,
        success: state.postReducer.success
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitImage: (image, imagePost) => dispatch(actions.startAddImage(image, imagePost)),
        removeImage: (position) => dispatch(actions.startRemoveImage(position))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GalleryEditor);