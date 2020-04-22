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
            return updateObject(state, { loading: false, error: true })

        case actionTypes.CHANGE_POST:
            return updateObject(state, { loading: true })

        case actionTypes.CHANGE_POST_SUCCESS:
            return updateObject(state, { loading: false, success: true })

        case actionTypes.CHANGE_POST_FAIL:
            return updateObject(state, { loading: false, error: true })

        case actionTypes.REMOVE_POST:
            return updateObject(state, { loading: true })

        case actionTypes.REMOVE_POST_SUCCESS:
            return updateObject(state, { loading: false, success: true, error: false })

        case actionTypes.REMOVE_POST_FAIL:
            return updateObject(state, { loading: false, success: false, error: true })

        case actionTypes.ADD_IMAGE:
            return updateObject(state, { loading: true })

        case actionTypes.ADD_IMAGE_SUCCESS:
            return updateObject(state, { loading: false, success: true })

        case actionTypes.ADD_IMAGE_FAIL:
            return updateObject(state, { loading: false, error: true })

        case actionTypes.REMOVE_IMAGE:
            return updateObject(state, { loading: true})

        case actionTypes.REMOVE_IMAGE_SUCCESS:
            return updateObject(state, { loading: false, success: true})

        case actionTypes.REMOVE_IMAGE_FAIL:
            return updateObject(state, { loading: false, error: true})

        default:
            return state;
    }
}

export default reducer;