import * as actionTypes from '../actions/actiontypes';

export const changeLanguage = (language) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language: language
    }
}