import reducer from '../authentication';
import * as actionTypes from '../../actions/actiontypes';

describe("Authentication Reducer Tests", () => {

  it("should return the initialState", () => {
    expect(reducer(undefined, {})).toEqual({
      localId: null,
      idToken: null,
      loading: false,
      error: false
    });
  });

  it("should store the token when logged-in", () => {
    expect(reducer({
      localId: null,
      idToken: null,
      loading: false,
      error: false
    }, {
      type: actionTypes.LOGIN_SUCCESS,
      localId: 'some-id',
      idToken: 'some-token'
    })).toEqual({
      localId: 'some-id',
      idToken: 'some-token',
      loading: false,
      error: false
    })
  });

  it("shoud return an error when tue user fails to login", () => {
    expect(reducer({
      localId: null,
      idToken: null,
      loading: false,
      error: false
    }, {
      type: actionTypes.LOGIN_FAIL,
      error: true,
    })).toEqual({
      localId: null,
      idToken: null,
      loading: false,
      error: true
    })
  })

  it("should clean the token and ID when logged-out", () => {
    expect(reducer({
      localId: 'some-id',
      idToken: 'some-token',
      loading: false,
      error: false
    }, {
      type: actionTypes.LOGOUT,
      idToken: null,
      localId: null
    })).toEqual({
      localId: null,
      idToken: null,
      loading: false,
      error: false
    })
  })

})