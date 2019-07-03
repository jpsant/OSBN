import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import CSSTransition from 'react-transition-group/CSSTransition';
import * as actions from '../../../../store/actions/actioncreators';

import './css/newsAnimation.css';
import classes from './css/NewsAdder.module.css';

import NewsCard from '../../../UI/newsCard/newsCard';
import Spinner from '../../../UI/spinner/spinner';
import Backdrop from '../../../UI/backDrop/backDrop';
import Modal from '../../../UI/modal/modal';

class NewsAdder extends Component {


    state = {
        brTitle: 'Balaio Nordeste!',
        brDate: 'xx/xx/xxxx',
        brContent: 'Resumo',
        brBody: '',
        enTitle: 'Balaio Nordeste!',
        enDate: 'xx/xx/xxxx',
        enContent: 'Resumo',
        enBody: '',
        frTitle: 'Balaio Nordeste!',
        frDate: 'xx/xx/xxxx',
        frContent: 'Resumo',
        frBody: '',
        image: null,
        showForm: true,
        modal: false,
        teste: null
    }

    postHandler = (event) => {
        event.preventDefault();
        this.setState({ showForm: false });

        const brPost = {
            data: this.state.brDate,
            titulo: this.state.brTitle,
            resumo: this.state.brContent,
            noticia: this.state.brBody,
            imagem: this.state.image,
            id: uniqid('br-')
        }

        const enPost = {
            data: this.state.enDate,
            titulo: this.state.enTitle,
            resumo: this.state.enContent,
            noticia: this.state.enBody,
            imagem: this.state.image,
            id: uniqid('en-')
        }

        const frPost = {
            data: this.state.frDate,
            titulo: this.state.frTitle,
            resumo: this.state.frContent,
            noticia: this.state.frBody,
            imagem: this.state.image,
            id: uniqid('fr-')
        }

        let image = this.state.teste;

        if (this.state.enBody && this.state.frBody !== '') {
            this.props.handlePost(brPost, enPost, frPost, image);
        } else {
            this.props.singlePost(brPost, image);
        }
    }

    imgHandler = (event) => {
        event.preventDefault();
        let file = event.target.files[0]
        this.setState({ teste: file });
    }


    render() {
        return (
            <>
                <div className={classes.buttonsContainer}>
                    <button className={classes.returnButton} onClick={this.props.clicked}>Voltar</button>
                </div>
                <div className={classes.container}>
                    <div className={classes.titleContainer}>
                        <h1>Adicionar nova Notícia</h1>
                        <h2>Preencha os campos abaixo com as Informações:</h2>
                    </div>
                    <div className={classes.formContainer}>
                        <div className={classes.form1}>
                            <h1>Português</h1>
                            <form>
                                <div className={classes.title}>
                                    <label className={classes.label} htmlFor="title">Título</label>
                                    <input onChange={(event) => this.setState({ brTitle: event.target.value })} value={this.state.brTitle} type="text" id="title" placeholder="Título da notícia!"></input>
                                </div>
                                <div className={classes.date}>
                                    <label htmlFor="date">Data</label>
                                    <input onChange={(event) => this.setState({ brDate: event.target.value })} value={this.state.brDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
                                </div>
                                <div className={classes.content}>
                                    <label htmlFor="content">Resumo</label>
                                    <input onChange={(event) => this.setState({ brContent: event.target.value })} value={this.state.brContent} type="text" id="content" placeholder="Resumo da notícia"></input>
                                </div>
                                <div className={classes.body}>
                                    <label htmlFor="body">Conteúdo da notícia</label>
                                    <input onChange={(event) => this.setState({ brBody: event.target.value })} type="text" id="body" placeholder="Conteúdo da notícia"></input>
                                </div>
                                <input onChange={this.imgHandler} type="file" id="file" name="file"></input>
                            </form>
                            <div className={classes.preview}>
                                <NewsCard disabled={e => e.preventDefault()} title={this.state.brTitle} date={this.state.brDate} content={this.state.brContent} img="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545" />
                            </div>
                        </div>
                        <div className={classes.form2}>
                            <h1>Inglês</h1>
                            <form>
                                <div className={classes.title}>
                                    <label className={classes.label} htmlFor="title">Título</label>
                                    <input onChange={(event) => this.setState({ enTitle: event.target.value })} value={this.state.enTitle} type="text" id="title" placeholder="Título da notícia!"></input>
                                </div>
                                <div className={classes.date}>
                                    <label htmlFor="date">Data</label>
                                    <input onChange={(event) => this.setState({ enDate: event.target.value })} value={this.state.enDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
                                </div>
                                <div className={classes.content}>
                                    <label htmlFor="content">Resumo</label>
                                    <input onChange={(event) => this.setState({ enContent: event.target.value })} value={this.state.enContent} type="text" id="content" placeholder="Resumo da notícia"></input>
                                </div>
                                <div className={classes.body}>
                                    <label htmlFor="body">Conteúdo da notícia</label>
                                    <input onChange={(event) => this.setState({ enBody: event.target.value })} type="text" id="body" placeholder="Conteúdo da notícia"></input>
                                </div>
                            </form>
                            <div className={classes.preview}>
                                <NewsCard disabled={e => e.preventDefault()} title={this.state.enTitle} date={this.state.enDate} content={this.state.enContent} img="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545" />
                            </div>
                        </div>
                        <div className={classes.form3}>
                            <h1>Francês</h1>
                            <form>
                                <div className={classes.title}>
                                    <label className={classes.label} htmlFor="title">Título</label>
                                    <input onChange={(event) => this.setState({ frTitle: event.target.value })} value={this.state.frTitle} type="text" id="title" placeholder="Título da notícia!"></input>
                                </div>
                                <div className={classes.date}>
                                    <label htmlFor="date">Data</label>
                                    <input onChange={(event) => this.setState({ frDate: event.target.value })} value={this.state.frDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
                                </div>
                                <div className={classes.content}>
                                    <label htmlFor="content">Resumo</label>
                                    <input onChange={(event) => this.setState({ frContent: event.target.value })} value={this.state.frContent} type="text" id="content" placeholder="Resumo da notícia"></input>
                                </div>
                                <div className={classes.body}>
                                    <label htmlFor="body">Conteúdo da notícia</label>
                                    <input onChange={(event) => this.setState({ frBody: event.target.value })} type="text" id="body" placeholder="Conteúdo da notícia"></input>
                                </div>
                            </form>
                            <div className={classes.preview}>
                                <NewsCard disabled={e => e.preventDefault()} title={this.state.frTitle} date={this.state.frDate} content={this.state.frContent} img="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button disabled={(this.state.brBody !== '' && this.state.teste !== null) || (this.state.brBody && this.state.enBody && this.state.frBody !== '' && this.state.teste !== null) ? false : true} onClick={this.postHandler} className={classes.button}>Publicar!</button>
                    </div>
                </div>

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
                    onExit={() => this.setState({ showForm: true, modal: false })}
                    timeout={500}
                >
                    <div>
                        <Backdrop clicked={this.props.clicked} show={this.props.success && this.state.modal} />
                        <Modal show={this.props.success && this.state.modal}>
                            <div className={classes.Modal}>
                                <h1>Notícia adicionada com sucesso!</h1>
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
        handlePost: (brPost, enPost, frPost, image) => dispatch(actions.startPosting(brPost, enPost, frPost, image)),
        singlePost: (brPost, image) => dispatch(actions.singlePost(brPost, image))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsAdder);