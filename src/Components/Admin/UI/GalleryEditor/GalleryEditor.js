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
import Spinner from '../../../UI/spinner/spinner';

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
        imgPosition: null,
        successModal: false,
        sucessRemoveImage: false,
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
        this.setState(prevState => ({
            showFormModal: !prevState.showFormModal
        }))
    }

    removeImage = (event) => {
        event.preventDefault();
        let position = this.state.imgPosition;
        this.props.removeImage(position);
        this.setState({showImageModal: false, sucessRemoveImage: true});
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
                                        <button disabled={this.state.selectedImage !== null ? false : true} onClick={this.submitImage} className={classes.button}>Enviar!</button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </CSSTransition>

                <CSSTransition in={this.props.loading}
                    classNames="news"
                    unmountOnExit
                    timeout={500}
                    onExit={() => this.props.success ? this.setState({ successModal: true }) : this.setState({successModal: false})} 
                >
                    <div>
                        <BackDrop show={this.props.loading} clicked={() => this.setState({showFormModal: false})} />
                        <Spinner />
                    </div>
                </CSSTransition>

                <CSSTransition in={this.props.success && this.state.successModal}
                    classNames="news"
                    unmountOnExit
                    onExit={() => this.setState({ successModal: false })}
                    timeout={500}
                >
                    <div>
                        <BackDrop clicked={() => this.setState({successModal: false})} show={this.props.success && this.state.successModal} />
                        <Modal show={this.props.success && this.state.successModal}>
                            <div className={classes.Modal}>
                                <h1>{this.state.sucessRemoveImage ? 'Imagem Removida com Sucesso!' : 'Imagem Adicionada com Sucesso!'}</h1>
                                <h2>Voltar para o menu principal:</h2>
                                <button className={classes.button} onClick={this.props.clicked}>Voltar</button>
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