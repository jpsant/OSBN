import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../../store/actions/actioncreators';

import './styles.scss';
import './cardAnimations.css';

import Modal from '../../../UI/modal/modal';
import Backdrop from '../../../UI/backDrop';
import NewsEditorCard from '../components/newsEditorCards';
import Spinner from '../../../UI/spinner/spinner';

class NewsEditor extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/noticias.json')
            .then(response => {
                this.setState({ brPosts: response.data.portuguese, enPosts: response.data.english, frPosts: response.data.french })
                console.log(response.data.portuguese);
            })
    }

    state = {
        brPosts: null,
        enPosts: null,
        frPosts: null,
        showModal: false,
        modalItemPosition: null,
        modalTitle: null,
        modalResume: null,
        modalContent: null,
        modalDate: null,
        modalId: null,
        language: '',
        image: null,
        modalImage: null,
        modal: false
    }

    itemHandler = (item, position, language) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            modalItemPosition: position,
            modalTitle: item.titulo,
            modalResume: item.resumo,
            modalContent: item.noticia,
            modalDate: item.data,
            modalId: item.id,
            modalImage: item.imagem,
            language: language
        }));
    }

    submitPost = (event) => {
        event.preventDefault();
        this.setState({ showModal: false });
        let post = {
            titulo: this.state.modalTitle,
            data: this.state.modalDate,
            resumo: this.state.modalResume,
            imagem: this.state.modalImage,
            noticia: this.state.modalContent,
            id: this.state.modalId
        };
        let position = this.state.modalItemPosition;
        let language = this.state.language;
        let newImage = this.state.image;

        this.props.changePost(post, position, language, newImage)
    }

    imgHandler = (event) => {
        event.preventDefault();
        this.setState({ image: event.target.files[0] });
    }

    removePost = (event) => {
        event.preventDefault();
        this.setState({ showModal: false });
        let position = this.state.modalItemPosition;
        let language = this.state.language;

        this.props.removePost(position, language);
    }

    render() {
        let brPosts = null;
        let enPosts = null;
        let frPosts = null;
        if (this.state.brPosts && this.state.enPosts && this.state.frPosts) {
            brPosts = this.state.brPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => this.itemHandler(item, index, 'portuguese')} key={item.id} image={item.imagem} title={item.titulo} content={item.resumo} />
            })

            enPosts = this.state.enPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => this.itemHandler(item, index, 'english')} key={item.id} image={item.imagem} title={item.titulo} content={item.resumo} />
            })

            frPosts = this.state.frPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => this.itemHandler(item, index, 'french')} key={item.id} image={item.imagem} title={item.titulo} content={item.resumo} />
            })
        }

        return (
            <>
                <div className="news-editor-button-container">
                    <button className="news-editor-button-container-button" onClick={this.props.clicked}>Voltar</button>
                </div>
                <div className="news-editor-container">

                    <div className="news-editor-container__titleContainer">
                        <h1>Editor de Notícias!</h1>
                        <h2>Selecione a notícia que você deseja editar:</h2>
                    </div>

                    <div className="news-editor-container__brPosts">
                        <div className="news-editor-container__brPosts-titleContainer">
                            <h1 className="news-editor-container__brPosts-titleContainer-title">Português!</h1>
                        </div>

                        <div className="news-editor-container__brPosts-postsContainerBr">
                            {brPosts}
                        </div>
                    </div>
                    <div className="news-editor-container__enPosts">
                        <div className="news-editor-container__enPosts-titleContainer">
                            <h1 className="news-editor-container__enPosts-titleContainer-title">Inglês!</h1>
                        </div>

                        <div className="news-editor-container__enPosts-postsContainerEn">
                            {enPosts}
                        </div>
                    </div>
                    <div className="news-editor-container__frPosts">
                        <div className="news-editor-container__frPosts-titleContainer">
                            <h1 className="news-editor-container__frPosts-titleContainer-title">Francês!</h1>
                        </div>

                        <div className="news-editor-container__frPosts-postsContainerFr">
                            {frPosts}
                        </div>
                    </div>
                </div>

                <CSSTransition in={this.state.showModal}
                    classNames="news"
                    unmountOnExit
                    timeout={250}>
                    <div>
                        <Backdrop clicked={() => this.setState({ showModal: false, modalItem: null, modalItemPosition: null })} show={this.state.showModal} />
                        <Modal show={this.state.showModal}>
                            <div className="editor-modal-container">
                                <div className="editor-modal-container__previewContainer">
                                    <div className="editor-modal-container__previewContainer__titleContainer">
                                        <h1 className="editor-modal-container__previewContainer__titleContainer-title">{this.state.modalTitle}</h1>
                                        <img alt="" className="editor-modal-container__previewContainer__titleContainer-image" src={this.state.modalImage}></img>
                                        <h4 className="editor-modal-container__previewContainer__titleContainer-date">{this.state.modalDate}</h4>
                                        <h3 className="editor-modal-container__previewContainer__titleContainer-resume">{this.state.modalResume}</h3>
                                    </div>
                                    <div className="editor-modal-container__previewContainer__contentContainer">
                                        <h3 className="editor-modal-container__previewContainer__contentContainer-content">{this.state.modalContent}</h3>
                                    </div>
                                </div>
                                <div className="editor-modal-container__editorContainer">
                                    <form className="editor-modal-container__editorContainer__form">
                                        <div className="editor-modal-container__editorContainer__form-title">
                                            <label htmlFor="title">Título</label>
                                            <input onChange={(event) => this.setState({ modalTitle: event.target.value })} value={this.state.modalTitle} type="text" id="title" placeholder="Título da notícia!"></input>
                                            <input onChange={this.imgHandler} type="file" id="file" name="file"></input>
                                        </div>
                                        <div className="editor-modal-container__editorContainer__form-date">
                                            <label htmlFor="date">Data</label>
                                            <input onChange={(event) => this.setState({ modalDate: event.target.value })} value={this.state.modalDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
                                        </div>
                                        <div className="editor-modal-container__editorContainer__form-content">
                                            <label htmlFor="content">Resumo</label>
                                            <input onChange={(event) => this.setState({ modalResume: event.target.value })} value={this.state.modalResume} type="text" id="content" placeholder="Resumo da notícia"></input>
                                        </div>
                                        <div className="editor-modal-container__editorContainer__form-body">
                                            <label htmlFor="body">Conteúdo da notícia</label>
                                            <textarea cols="45" rows="12" onChange={(event) => this.setState({ modalContent: event.target.value })} value={this.state.modalContent} type="text" id="body" placeholder="Conteúdo da notícia"></textarea>
                                        </div>
                                        <div className="editor-modal-container__editorContainer__form__submit">
                                            <button className="editor-modal-container__editorContainer__form__submit-button" onClick={this.submitPost}>Publicar!</button>
                                            <button className="editor-modal-container__editorContainer__form__submit-removeButton" onClick={this.removePost}>Remover</button>
                                        </div>
                                    </form>
                                </div>
                                {/* <button onClick={() => this.setState({ showModal: false, modalItem: null, modalItemPosition: null })}>Voltar!</button> */}
                            </div>
                        </Modal>
                    </div>
                </CSSTransition>

                <CSSTransition in={this.props.loading}
                    classNames="news"
                    unmountOnExit
                    timeout={500}
                    onExit={() => this.setState({ modal: true })}
                >
                    <div>
                        <Backdrop show={this.props.loading} />
                        <Spinner />
                    </div>
                </CSSTransition>

                <CSSTransition in={this.props.success && this.state.modal}
                    classNames="news"
                    unmountOnExit
                    onExit={() => this.setState({ modal: false })}
                    timeout={500}
                >
                    <div>
                        <Backdrop clicked={this.props.clicked} show={this.props.success && this.state.modal} />
                        <Modal show={this.props.success && this.state.modal}>
                            <div className="news-editor-modal">
                                <h1>Notícia Modificada com sucesso!</h1>
                                <h2>Voltar para o menu principal:</h2>
                                <button className="news-editor-modal-button" onClick={this.props.clicked}>Voltar</button>
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
        changePost: (newPost, position, language, newImage) => dispatch(actions.initChangePost(newPost, position, language, newImage)),
        removePost: (position, language) => dispatch(actions.startRemovePost(position, language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsEditor);