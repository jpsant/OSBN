import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../../store/actions/actioncreators';

import classes from './css/NewsEditor.module.css';
import './css/cardAnimations.module.css';

import Modal from '../../../UI/modal/modal';
import Backdrop from '../../../UI/backDrop/backDrop';
import NewsEditorCard from '../components/newsEditorCards/newsEditorCards';

class NewsEditor extends Component {

    componentDidMount() {
        axios.get('https://osbn-a36f9.firebaseio.com/noticias.json')
            .then(response => {
                this.setState({ brPosts: response.data.portuguese, enPosts: response.data.english, frPosts: response.data.french })
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
        language: ''
    }

    itemHandler = (item, position, language) => {
        this.setState(prevState => ({
            showModal: !prevState.showModal,
            modalItemPosition: position,
            modalTitle: item.titulo,
            modalResume: item.resumo,
            modalContent: item.noticia,
            modalDate: item.data,
            language: language
        }));
    }

    submitPost = (event) => {
        event.preventDefault();
        let post = {
            titulo: this.state.modalTitle,
            data: this.state.modalDate,
            resumo: this.state.modalResume,
            noticia: this.state.modalContent
        };
        let position = this.state.modalItemPosition;
        let language = this.state.language;

        this.props.changePost(post, position, language)
    }

    render() {
        let brPosts = null;
        let enPosts = null;
        let frPosts = null;
        if (this.state.brPosts && this.state.enPosts && this.state.frPosts) {
            brPosts = this.state.brPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => this.itemHandler(item, index, 'portuguese')} key={item.id} title={item.titulo} content={item.resumo} />
            })

            enPosts = this.state.enPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => this.itemHandler(item, index, 'english')} key={item.id} title={item.titulo} content={item.resumo} />
            })

            frPosts = this.state.frPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => this.itemHandler(item, index, 'french')} key={item.id} title={item.titulo} content={item.resumo} />
            })
        }

        return (
            <>
                <div className={classes.container}>

                    <div className={classes.titleContainer}>
                        <h1>Editor de Notícias!</h1>
                        <h2>Selecione a notícia que você deseja editar:</h2>
                    </div>

                    <div className={classes.brPosts}>
                        <div className={classes.titleContainer}>
                            <h1 className={classes.title}>Português!</h1>
                        </div>

                        <div className={classes.postsContainer}>
                            {brPosts}
                        </div>
                    </div>
                    <div className={classes.enPosts}>
                        <div className={classes.titleContainer}>
                            <h1 className={classes.title}>Inglês!</h1>
                        </div>

                        <div className={classes.postsContainer}>
                            {enPosts}
                        </div>
                    </div>
                    <div className={classes.frPosts}>
                        <div className={classes.titleContainer}>
                            <h1 className={classes.title}>Francês!</h1>
                        </div>

                        <div className={classes.postsContainer}>
                            {frPosts}
                        </div>
                    </div>
                    <button onClick={this.props.clicked}>votar</button>
                </div>

                <CSSTransition in={this.state.showModal}
                    classNames="news"
                    unmountOnExit
                    timeout={250}>
                    <div>
                        <Backdrop clicked={() => this.setState({ showModal: false, modalItem: null, modalItemPosition: null })} show={this.state.showModal} />
                        <Modal show={this.state.showModal}>
                            <div className={classes.editorContainer}>
                                <div className={classes.previewContainer}>
                                    <div className={classes.titleContainer}>
                                        <h1 className={classes.title}>{this.state.modalTitle}</h1>
                                        <h4 className={classes.date}>{this.state.modalDate}</h4>
                                        <h3 className={classes.resume}>{this.state.modalResume}</h3>
                                    </div>
                                    <div className={classes.contentContainer}>
                                        <h3 className={classes.content}>{this.state.modalContent}</h3>
                                    </div>
                                </div>
                                <div className={classes.editorContainer}>
                                    <form>
                                        <div className={classes.title}>
                                            <label className={classes.label} htmlFor="title">Título</label>
                                            <input onChange={(event) => this.setState({ modalTitle: event.target.value })} value={this.state.modalTitle} type="text" id="title" placeholder="Título da notícia!"></input>
                                        </div>
                                        <div className={classes.date}>
                                            <label htmlFor="date">Data</label>
                                            <input onChange={(event) => this.setState({ modalDate: event.target.value })} value={this.state.modalDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
                                        </div>
                                        <div className={classes.content}>
                                            <label htmlFor="content">Resumo</label>
                                            <input onChange={(event) => this.setState({ modalResume: event.target.value })} value={this.state.modalResume} type="text" id="content" placeholder="Resumo da notícia"></input>
                                        </div>
                                        <div className={classes.body}>
                                            <label htmlFor="body">Conteúdo da notícia</label>
                                            <textarea cols="45" rows="12" onChange={(event) => this.setState({ modalContent: event.target.value })} value={this.state.modalContent} type="text" id="body" placeholder="Conteúdo da notícia"></textarea>
                                        </div>
                                        <div className={classes.submit}>
                                            <button className={classes.button} onClick={this.submitPost}>submit!!</button>
                                        </div>
                                    </form>
                                </div>
                                {/* <button onClick={() => this.setState({ showModal: false, modalItem: null, modalItemPosition: null })}>Voltar!</button> */}
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
        changePost: (newPost, position, language) => dispatch(actions.initChangePost(newPost, position, language))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewsEditor);