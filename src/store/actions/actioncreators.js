import * as actionTypes from '../actions/actiontypes';

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