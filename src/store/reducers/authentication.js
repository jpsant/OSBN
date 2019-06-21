import * as actionTypes from '../actions/actiontypes';
import { updateObject } from '../ultillity/ultillity';

const initialState = {
    localId: null,
    idToken: null,
    loading: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_LOGIN:
            return updateObject(state, { loading: true })

        case actionTypes.LOGIN_SUCCESS:
            return updateObject(state, { loading: false, localId: action.localId, idToken: action.idToken })

        case actionTypes.LOGIN_FAIL:
            return updateObject(state, { loading: false, error: true })

        case actionTypes.LOGOUT:
            return updateObject(state, { idToken: null, localId: null })

        default:
            return state;
    }
}

export default reducer;