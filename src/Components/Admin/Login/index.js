import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { isAuthenticated } from '../Authentication';

import * as actions from '../../../store/actions/actioncreators';

import './loginAnimations.css';
import './styles.scss';

import Spinner from '../../UI/spinner/spinner';

export default function Login() {
  const loading = useSelector(state => state.authReducer.loading);
  const token = useSelector(state => state.authReducer.idToken !== null);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginHandler(e) {
    e.preventDefault();
    dispatch(actions.initLogin(email, password));
  }

  return (
    <>
    {/* {isAuthenticated(token, '/admin/pageManagement')} */}
      <div className="login-container">
        <CSSTransition in={loading !== true}
          classNames="news"
          unmountOnExit
          timeout={500}>
          <div className="login-container">
            <div className="login-container__titleContainer">
              <h2>Orquestra Sanfônica Balaio Nordeste</h2>
              <h1 className="login-container__titleContainer-title">Gerenciador de Página</h1>
            </div>
            <div className="login-container__formContainer">
              <div>
                <form className="login-container__formContainer-form" onSubmit={loginHandler}>
                  <h1 className="login-container__formContainer-title">Login</h1>
                  <div className="login-container__formContainer-form-email">
                    <label htmlFor="email">E-mail</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" id="email" placeholder="Seu Email"></input>
                  </div>
                  <div className="login-container__formContainer-form-password">
                    <label htmlFor="password">Senha</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Sua Senha"></input>
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

      <CSSTransition in={loading}
        classNames="news"
        unmountOnExit
        timeout={500}>
        <div>
          <Spinner />
        </div>
      </CSSTransition>
    </>
  );
}