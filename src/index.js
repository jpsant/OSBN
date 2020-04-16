import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import auth from './store/reducers/authentication';
import language from './store/reducers/language';
import post from './store/reducers/posting';

import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    authReducer: auth,
    languageReducer: language,
    postReducer: post
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //REDUX-DEVTOOLS!

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));