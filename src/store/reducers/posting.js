import * as actionTypes from '../actions/actiontypes';
import { updateObject } from '../ultillity/ultillity';

const initialState = {
    loading: false,
    success: false,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.START_POSTING:
            return updateObject(state, { loading: true })

        case actionTypes.POST_SUCCESS:
            return updateObject(state, { loading: false, success: true })

        case actionTypes.POST_FAIL:
            return updateObject(state, { loading: false})

        default:
            return state;
    }
}

export default reducer;