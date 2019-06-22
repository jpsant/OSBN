import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './css/PageManager.module.css';

class PageManager extends Component {
    render() {
        let redirect = null;
        if (this.props.token === null) {
            redirect = <Redirect to="/" />
        }
        return (
            <>
                {redirect}
                <div className={classes.pageContainer}>
                    <div className={classes.titleContainer}>
                        <h1 className={classes.title}>Gerenciamento de Páginas</h1>
                        <h2>Escolha qual seção editar:</h2>
                    </div>
                    <div className={classes.cardsContainer}>
                        <div className={classes.card1}>
                            <div className={classes.title}>
                                <h1>Seção de Notícias</h1>
                                <h3>Adicionar nova Notícia ou Editar notícias existentes:</h3>
                            </div>
                            <div className={classes.buttons}>
                                <div className={classes.addContainer}>
                                    <NavLink className={classes.add}>Adicionar</NavLink>
                                </div>
                                <div className={classes.editContainer}>
                                    <NavLink className={classes.edit}>Editar</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className={classes.card2}>
                            <div className={classes.title}>
                                <h1>Seção de Fotos</h1>
                                <h3>Adicionar novas fotos ou Remover fotos existentes:</h3>
                            </div>
                            <div className={classes.buttons}>
                                <NavLink className={classes.edit}>Editar</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.idToken
    }
}

export default connect(mapStateToProps)(PageManager);