import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as actions from '../../../store/actions/actioncreators';
import Cookies from 'js-cookie';

import './loginAnimations.css';

import './styles.scss';
import Spinner from '../../UI/spinner/spinner';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    loginHandler = (event) => {
        event.preventDefault();
        this.props.loginHandler(this.state.email, this.state.password)
    }

    emailHandler = (event) => {
        this.setState({ email: event.target.value })
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {

        let cookie = Cookies.get('acess_token');
        let redirect = null;

        if (this.props.token === false) {
            if (cookie === undefined) {
                redirect = null;
            } else {
                redirect = <Redirect to="/admin/pageManagement" />
            }
        } else {
            redirect = <Redirect to="/admin/pageManagement" />
        }

        return (
            <>
                {redirect}
                <div className="login-container">
                    <CSSTransition in={this.props.loading !== true}
                        classNames="news"
                        unmountOnExit
                        onExit={() => this.setState({ showImageModal: false })}
                        timeout={500}>
                        <div className="login-container">
                            <div className="login-container__titleContainer">
                                <h2>Orquestra Sanfônica Balaio Nordeste</h2>
                                <h1 className="login-container__titleContainer-title">Gerenciador de Página</h1>
                            </div>
                            <div className="login-container__formContainer">
                                <div>
                                    <form className="login-container__formContainer-form" onSubmit={this.loginHandler}>
                                        <h1 className="login-container__formContainer-title">Login</h1>
                                        <div className="login-container__formContainer-form-email">
                                            <label htmlFor="email">E-mail</label>
                                            <input onChange={this.emailHandler} type="text" id="email" placeholder="Seu Email"></input>
                                        </div>
                                        <div className="login-container__formContainer-form-password">
                                            <label htmlFor="password">Senha</label>
                                            <input onChange={this.passwordHandler} type="password" id="password" placeholder="Sua Senha"></input>
                                        </div>
                                        <button className="login-container__formContainer-form-button">Submit</button>
                                    </form>
                                </div>
                                <div style={{ backgroundColor: '#508CA4' }}>
                                    <h3 className="login-container__formContainer__subTitle">Não sabe como veio parar nessa página?</h3>
                                    <NavLink className="login-container__formContainer__returnButton" to="/">Voltar</NavLink>
                                </div>
                            </div>
                        </div>
                    </CSSTransition>
                </div>

                <CSSTransition in={this.props.loading}
                    classNames="news"
                    unmountOnExit
                    timeout={500}>
                    <div>
                        {/* <Backdrop show={this.props.loading} /> */}
                        <Spinner />
                    </div>
                </CSSTransition>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.authReducer.loading,
        token: state.authReducer.idToken !== null,
        authenticated: state.authReducer.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginHandler: (email, password) => dispatch(actions.initLogin(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);