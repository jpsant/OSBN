import reducer from '../posting';
import * as actionTypes from '../../actions/actiontypes';

describe("Posting Reducer tests", () => {

  it("should return sucess when the post succeed", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.POST_SUCCESS,
      success: true
    })).toEqual({
      loading: false,
      success: true,
      error: false
    });
  });

  it("should return fail when the post fails", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.POST_FAIL,
      error: true
    })).toEqual({
      loading: false,
      success: false,
      error: true
    });
  });

  it("should return sucess when the change-post succeed", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.CHANGE_POST_SUCCESS,
      success: true
    })).toEqual({
      loading: false,
      success: true,
      error: false
    });
  });

  it("should return fail when the change-post fails", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.CHANGE_POST_FAIL,
      error: true
    })).toEqual({
      loading: false,
      success: false,
      error: true
    });
  });


  it("should return sucess when the remove-post succeed", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.REMOVE_POST_SUCCESS,
      success: true
    })).toEqual({
      loading: false,
      success: true,
      error: false
    });
  });

  it("should return fail when the remove-post fails", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.REMOVE_POST_FAIL,
      error: true
    })).toEqual({
      loading: false,
      success: false,
      error: true
    });
  });


  it("should return sucess when the add-image succeed", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.ADD_IMAGE_SUCCESS,
      success: true
    })).toEqual({
      loading: false,
      success: true,
      error: false
    });
  });

  it("should return fail when the add-image fails", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.ADD_IMAGE_FAIL,
      error: true
    })).toEqual({
      loading: false,
      success: false,
      error: true
    });
  });

  it("should return sucess when the remove-image succeed", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.REMOVE_IMAGE_SUCCESS,
      success: true
    })).toEqual({
      loading: false,
      success: true,
      error: false
    });
  });

  it("should return fail when the remove-image fails", () => {
    expect(reducer({
      loading: false,
      success: false,
      error: false
    }, {
      type: actionTypes.REMOVE_IMAGE_FAIL,
      error: true
    })).toEqual({
      loading: false,
      success: false,
      error: true
    });
  });

})