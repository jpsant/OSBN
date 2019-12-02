import React, { Component } from 'react';
import classes from './css/languageSelector.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';

import brazil from '../../../assets/svgs/brazil.svg';
import usa from '../../../assets/svgs/usa.svg';
import france from '../../../assets/svgs/france.svg';

class LanguageSelector extends Component {


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

    render() {
        return (
            <div style={{visibility: this.props.show === 0 ? 'visible' : 'hidden', opacity: this.props.show === 0 ? '1' : '0'}} className={this.props.position === 'center' ? classes.dropdownCenter : classes.dropdown}>
                <button className={classes.dropbtn}><img className={classes.svg} src={this.props.flag === 'brazil' ? brazil : 
                this.props.flag === 'usa' ? usa : this.props.flag === 'france' ? france : brazil} alt=""></img></button>
                <div className={classes.dropdownContent}>
                    <button onClick={this.portugueseHandler}><img className={classes.svg} src={brazil} alt=""></img></button>
                    <button onClick={this.englishHandler}><img className={classes.svg} src={usa} alt=""></img></button>
                    <button onClick={this.frenchHandler}><img className={classes.svg} src={france} alt=""></img></button>
                </div>
            </div>
        )
    }
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