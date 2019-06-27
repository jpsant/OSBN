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
                dispatch(loginSuccess(response.data.idToken, response.data.localId));
            })
            .catch(error => {
                console.log(error);
                dispatch(loginFail(error));
            })
    }
}

export const initPosting = () => {
    return {
        type: actionTypes.START_POSTING
    }
}

export const postingSuccess = () => {
    return {
        type: actionTypes.POST_SUCCESS
    }
}

export const postingFail = (error) => {
    return {
        type: actionTypes.POST_FAIL,
        error: error
    }
}

export const changePost = () => {
    return {
        type: actionTypes.CHANGE_POST
    }
}

export const changePostSuccess = () => {
    return {
        type: actionTypes.CHANGE_POST_SUCCESS
    }
}

export const changePostFail = () => {
    return {
        type: actionTypes.CHANGE_POST_FAIL
    }
}

export const initChangePost = (newPost, position, language) => {
    return dispatch => {
        dispatch(changePost());
        axios.put('https://osbn-a36f9.firebaseio.com/noticias/' + language + '/' + position + '.json', newPost)
            .then(response => {
                dispatch(changePostSuccess());
                console.log(response.data);
            })
            .catch(error => {
                dispatch(changePostFail());
            })
    }
}

export const singlePost = (brPost) => {
    return dispatch => {
        dispatch(initPosting());
        axios.get('https://osbn-a36f9.firebaseio.com/noticias/portuguese.json')
            .then(response => {
                let position = response.data.length;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/portuguese/' + position + '.json', brPost)
                    .then(response => {
                        dispatch(postingSuccess());
                    })
                    .catch(error => {
                        dispatch(postingFail(error));
                        console.log(error);
                    })
            })
    }
}

export const startPosting = (brPost, enPost, frPost) => {
    return dispatch => {

        dispatch(initPosting());
        axios.get('https://osbn-a36f9.firebaseio.com/noticias/portuguese.json')
            .then(response => {
                let position = response.data.length;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/portuguese/' + position + '.json', brPost)
                    .catch(error => {
                        dispatch(postingFail(error));
                        console.log(error);
                    })
            })

        axios.get('https://osbn-a36f9.firebaseio.com/noticias/english.json')
            .then(response => {
                let position = response.data.length;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/english/' + position + '.json', enPost)
                    .catch(error => {
                        dispatch(postingFail(error));
                        console.log(error);
                    })
            })

        axios.get('https://osbn-a36f9.firebaseio.com/noticias/french.json')
            .then(response => {
                let position = response.data.length;

                axios.put('https://osbn-a36f9.firebaseio.com/noticias/french/' + position + '.json', frPost)
                    .then(response => {
                        dispatch(postingSuccess());
                    })
                    .catch(error => {
                        dispatch(postingFail(error));
                        console.log(error);
                    })
            })

    }
}