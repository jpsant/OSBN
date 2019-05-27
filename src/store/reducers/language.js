import * as actionTypes from '../actions/actiontypes';
import { updateObject } from '../ultillity/ultillity';

const initalState = {
    language: 'portuguese',
    flag: 'brazil'
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return updateObject(state, {language: action.language, flag: action.flag})

        default:
            return state;
    }
}

export default reducer;