import reducer from '../language';
import * as actionTypes from '../../actions/actiontypes';

describe("Language Reducer tests", () => {

  it("should change the language", () => {
    expect(reducer({
      language: 'portuguese',
      flag: 'brazil',
      section: 'history'
    }, {
      type: actionTypes.CHANGE_LANGUAGE,
      language: 'new-language',
      flag: 'new-flag'
    })).toEqual({
      language: 'new-language',
      flag: 'new-flag',
      section: 'history'
    });
  });
  
  it("should change the section", () => {
    expect(reducer({
      language: 'portuguese',
      flag: 'brazil',
      section: 'history'
    }, {
      type: actionTypes.CHANGE_SECTION,
      section: 'new-section'
    })).toEqual({
      language: 'portuguese',
      flag: 'brazil',
      section: 'new-section'
    });
  });

})