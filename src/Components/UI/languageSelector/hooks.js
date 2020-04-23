import React from 'react';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';

import brazil from '../../../assets/svgs/brazil.svg';
import usa from '../../../assets/svgs/usa.svg';
import france from '../../../assets/svgs/france.svg';

export default function LanguageSelector({ show, position }) {
  const flag = useSelector(state => state.languageReducer.flag);
  const dispatch = useDispatch();

  function portugueseHandler() {
    dispatch(actions.changeLanguage('portuguese', 'brazil'))
  }

  function englishHandler() {
    dispatch(actions.changeLanguage('english', 'usa'))
  }

  function frenchHandler() {
    dispatch(actions.changeLanguage('french', 'france'))
  }

  return (
    <div style={{ visibility: show === 0 ? 'visible' : 'hidden', opacity: show === 0 ? '1' : '0' }} 
    className={position === 'center' ? 'dropdownCenter' : 'dropdown'}>
      <button className={'dropdown-dropbtn'}>
        <img className={'flag-svg'} src={flag === 'brazil' ? brazil :
          flag === 'usa' ? usa : flag === 'france' ? france : brazil} alt="" />
      </button>
      <div className={'dropdownContent'}>
        <button onClick={portugueseHandler}>
          <img className={'flag-svg'} src={brazil} alt="Brazil Flag" />
        </button>
        <button onClick={englishHandler}>
          <img className={'flag-svg'} src={usa} alt="USA Flag" />
        </button>
        <button onClick={frenchHandler}>
          <img className={'flag-svg'} src={france} alt="France Flag" />
        </button>
      </div>
    </div>
  );
};




/*

state = {
        image: brazil,
    }

    portugueseHandler = () => {
        this.setState({ language: 'portuguese', image: brazil });
        this.languageHandler('portuguese', 'brazil');
    }

    englishHandler = () => {
        this.setState({ language: 'english', image: usa });
        this.languageHandler('english', 'usa');
    }

    frenchHandler = () => {
        this.setState({ language: 'french', image: france });
        this.languageHandler('french', 'france');
    }

    languageHandler = (language, flag) => {
        this.props.changeLanguage(language, flag);
    }


    const mapStateToProps = state => {
    return {
        language: state.languageReducer.language,
        flag: state.languageReducer.flag
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: (language, flag) => dispatch(actions.changeLanguage(language, flag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);

*/