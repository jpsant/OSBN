import * as actionTypes from '../actions/actiontypes';
import { updateObject } from '../ultillity/ultillity';

const initalState = {
    language: 'portuguese',
    flag: 'brazil',
    section: 'history'
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return updateObject(state, {language: action.language, flag: action.flag});

        case actionTypes.CHANGE_SECTION:
            return updateObject(state, {section: action.section})

        default:
            return state;
    }
}

export default reducer;