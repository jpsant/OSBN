import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/actioncreators';
import CSSTransition from 'react-transition-group/CSSTransition';


import classes from './css/Login.module.css';
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

        let body = (
            <CSSTransition>
                <div className={classes.container}>
                    <div className={classes.titleContainer}>
                        <h2>Orquestra Sanfônica Balaio Nordeste</h2>
                        <h1 className={classes.title}>Gerenciador de Página</h1>
                    </div>
                    <div className={classes.formContainer}>
                        <div>
                            <form className={classes.form} onSubmit={this.loginHandler}>
                                <h1 className={classes.title}>Login</h1>
                                <div className={classes.email}>
                                    <label className={classes.label} htmlFor="email">E-mail</label>
                                    <input onChange={this.emailHandler} type="text" id="email" placeholder="Seu Email"></input>
                                </div>
                                <div className={classes.password}>
                                    <label className={classes.label} htmlFor="password">Senha</label>
                                    <input onChange={this.passwordHandler} type="password" id="password" placeholder="Sua Senha"></input>
                                </div>
                                <button className={classes.button}>Submit</button>
                            </form>
                        </div>
                        <div style={{ backgroundColor: '#508CA4' }}>
                            <h3 className={classes.subTitle}>Não sabe como veio parar nessa página?</h3>
                            <NavLink className={classes.returnButton} to="/">Voltar</NavLink>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        );

        if (this.props.loading) {
            body = <Spinner />
        }

        if (this.props.token) {
            body = <Redirect to="/admin/pageManagement" />
        }

        return (
            <>
                <div className={classes.container}>
                    {body}
                </div>
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