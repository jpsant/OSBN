import * as actionTypes from '../actions/actiontypes';
import axios from 'axios';

export const changeLanguage = (language, flag) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language: language,
        flag: flag
    }
}

export const changeSection = (section) => {
    return {
        type: actionTypes.CHANGE_SECTION,
        section: section
    }
}

export const startLogin = () => {
    return {
        type: actionTypes.START_LOGIN
    }
}

export const loginSuccess = (token, id) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        idToken: token,
        localId: id
    }
}

export const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const initLogin = (email, password) => {
    return dispatch => {
        dispatch(startLogin());
        const authData = {
            email: email,
            password: password
        }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC6V_xGTaJQ55Zd_cRqZjrGcL95k2jb5EM', authData)
            .then(response => {
                console.log(response);
                dispatch(loginSuccess(response.data.idToken, response.data.localId));
            })
            .catch(error => {
                console.log(error);
                dispatch(loginFail(error));
            })
    }
}