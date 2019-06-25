import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        title: 'Balaio Nordeste!',
        date: 'xx/xx/xxxx',
        content: 'Resumo',
        body: '',
        id: new Date().valueOf(),
        showForm: true,
        modal: false
    }

    postHandler = (event) => {
        event.preventDefault();
        this.setState({ showForm: false });
        const post = {
            data: this.state.date,
            titulo: this.state.title,
            resumo: this.state.content,
            noticia: this.state.body,
            imagem: 'https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545',
            id: JSON.stringify(this.state.id)
        }
        this.props.handlePost(post);

    }

    titleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    dateHandler = (event) => {
        this.setState({ date: event.target.value });
    }

    contentHandler = (event) => {
        this.setState({ content: event.target.value });
    }

    bodyHandler = (event) => {
        this.setState({ body: event.target.value });
    }

    render() {
        console.log(this.state.id);
        return (
            <>
                <div className={classes.container}>
                    <div className={classes.titleContainer}>
                        <h1>Adicionar nova Notícia</h1>
                        <h2>Preencha os campos abaixo com as Informações:</h2>
                    </div>
                    <div className={classes.formContainer}>
                        <div className={classes.form}>
                            <form>
                                <div className={classes.title}>
                                    <label className={classes.label} htmlFor="title">Título</label>
                                    <input onChange={this.titleHandler} value={this.state.title} type="text" id="title" placeholder="Título da notícia!"></input>
                                </div>
                                <div className={classes.date}>
                                    <label htmlFor="date">Data</label>
                                    <input onChange={this.dateHandler} value={this.state.date} type="text" id="date" placeholder="xx/xx/xxxx"></input>
                                </div>
                                <div className={classes.content}>
                                    <label htmlFor="content">Resumo</label>
                                    <input onChange={this.contentHandler} value={this.state.content} type="text" id="content" placeholder="Resumo da notícia"></input>
                                </div>
                                <div className={classes.body}>
                                    <label htmlFor="body">Conteúdo da notícia</label>
                                    <input onChange={this.bodyHandler} type="text" id="body" placeholder="Conteúdo da notícia"></input>
                                </div>
                            </form>
                        </div>
                        <div className={classes.preview}>
                            <NewsCard className={classes.exemplo} title={this.state.title} date={this.state.date} content={this.state.content} img="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545" />
                        </div>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button onClick={this.postHandler} className={classes.button}>Publicar!</button>
                    </div>
                    {/* <button onClick={this.props.clicked}>votar</button> */}
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
                                <button className={classes.button} onClick={this.props.clicked} >Voltar</button>
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
        handlePost: (post) => dispatch(actions.startPosting(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsAdder);