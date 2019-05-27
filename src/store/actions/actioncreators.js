import * as actionTypes from '../actions/actiontypes';

export const changeLanguage = (language, flag) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language: language,
        flag: flag
    }
}