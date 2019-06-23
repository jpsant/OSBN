import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './css/PageManager.module.css';

import NewsEditor from '../UI/NewsEditor/NewsEditor';
import NewsAdder from '../UI/NewsAdder/NewsAdder';
import GalleryEditor from '../UI/GalleryEditor/GalleryEditor';

class PageManager extends Component {

    state = {
        newsAdd: false,
        newsEdit: false,
        galleryEdit: false
    }

    newsAddHandler = () => {
        this.setState(prevState => ({
            newsAdd: !prevState.newsAdd
        }));
    }

    newsEditHandler = () => {
        this.setState(prevState => ({
            newsEdit: !prevState.newsEdit
        }));
    }

    galleryEditHandler = () => {
        this.setState(prevState => ({
            galleryEdit: !prevState.galleryEdit
        }));
    }


    render() {
        let redirect = null;
        if (this.props.token === null) {
            redirect = <Redirect to="/" />
        }

        let body = (
            <>
                <div className={classes.titleContainer} style={{
                    transform: this.state.newsAdd || this.state.newsEdit || this.state.galleryEdit ? 'translateX(2vh)' : 'translateX(0)',
                    opacity: this.state.newsAdd || this.state.newsEdit || this.state.galleryEdit ? '0' : '1',
                    visibility: this.state.newsAdd || this.state.newsEdit || this.state.galleryEdit ? 'hidden' : 'visible'
                }}>
                    <h1 className={classes.title}>Gerenciamento de Páginas</h1>
                    <h2>Escolha qual seção editar :</h2>
                </div>
                <div className={classes.cardsContainer} style={{
                    transform: this.state.newsAdd || this.state.newsEdit || this.state.galleryEdit ? 'translateX(2vh)' : 'translateX(0)',
                    opacity: this.state.newsAdd || this.state.newsEdit || this.state.galleryEdit ? '0' : '1',
                    visibility: this.state.newsAdd || this.state.newsEdit || this.state.galleryEdit ? 'hidden' : 'visible'
                }}>
                    <div className={classes.card1}>
                        <div className={classes.title}>
                            <h1>Seção de Notícias</h1>
                            <h3>Adicionar nova Notícia ou Editar notícias existentes:</h3>
                        </div>
                        <div className={classes.buttons}>
                            <div className={classes.addContainer}>
                                <button onClick={this.newsAddHandler} className={classes.add}>Adicionar</button>
                            </div>
                            <div className={classes.editContainer}>
                                <button onClick={this.newsEditHandler} className={classes.edit}>Editar</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.card2}>
                        <div className={classes.title}>
                            <h1>Seção de Fotos</h1>
                            <h3>Adicionar novas fotos ou Remover fotos existentes:</h3>
                        </div>
                        <div className={classes.buttons}>
                            <button onClick={this.galleryEditHandler} className={classes.edit}>Editar</button>
                        </div>
                    </div>
                </div>
            </>
        );

        if (this.state.newsEdit) {
            body = <NewsEditor clicked={this.newsEditHandler} />
        }

        if (this.state.newsAdd) {
            body = <NewsAdder clicked={this.newsAddHandler} />
        }

        if (this.state.galleryEdit) {
            body = <GalleryEditor clicked={this.galleryEditHandler} />
        }

        return (
            <div className={classes.pageContainer}>
                {body}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.idToken
    }
}

export default connect(mapStateToProps)(PageManager);