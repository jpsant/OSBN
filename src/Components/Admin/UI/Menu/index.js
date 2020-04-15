import React, { Component } from 'react';
import * as actions from '../../../../store/actions/actioncreators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './styles.scss';

class Menu extends Component {

    state = {
        redirect: false
    }

    logoutHandler = () => {
        this.props.logoutHandler();
        this.setState(prevState => ({
            redirect: !prevState.redirect
        }))
    }

    render() {
        let redirect = null
        if (this.state.redirect) {
            redirect = <Redirect to="/login" />
        }

        return (
            <>
            {redirect}
                <div className="menu-page-container">
                    <div className="menu-page-container__titleContainer">
                        <h1 className="menu-page-container__titleContainer-title">Gerenciamento de Páginas</h1>
                        <h2>Escolha qual seção editar :</h2>
                    </div>
                    <div className="menu-page-container__cards-container">
                        <div className="menu-page-container__cards-container__card1">
                            <div className="menu-page-container__cards-container__card1-title">
                                <h1>Seção de Notícias</h1>
                                <h3>Adicionar nova Notícia ou Editar notícias existentes:</h3>
                            </div>
                            <div className="menu-page-container__cards-container__card1__buttons">
                                <div className="menu-page-container__cards-container__card1__buttons__addContainer">
                                    <button onClick={this.props.newsAdd} className="menu-page-container__cards-container__card1__buttons__addContainer-add">Adicionar</button>
                                </div>
                                <div className="menu-page-container__cards-container__card1__buttons__editContainer">
                                    <button onClick={this.props.newsEdit} className="menu-page-container__cards-container__card1__buttons__editContainer-edit">Editar</button>
                                </div>
                            </div>
                        </div>
                        <div className="menu-page-container__cards-container__card2">
                            <div className="menu-page-container__cards-container__card2-title">
                                <h1>Seção de Fotos</h1>
                                <h3>Adicionar novas fotos ou Remover fotos existentes:</h3>
                            </div>
                            <div className="menu-page-container__cards-container__card2__buttons">
                                <button onClick={this.props.galleryEdit} className="menu-page-container__cards-container__card2__buttons-edit">Editar</button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-page-container__logoutContainer">
                        <button className="menu-page-container__logoutContainer-logoutButton" onClick={this.logoutHandler}>Logout!</button>
                    </div>
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutHandler: () => dispatch(actions.initLogout())
    }
}

export default connect(null, mapDispatchToProps)(Menu);