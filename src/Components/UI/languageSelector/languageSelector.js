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
        language: 'portuguese'
    }

    portugueseHandler = () => {
        this.setState({ language: 'portuguese', image: brazil });
        this.languageHandler('portuguese');
    }

    englishHandler = () => {
        this.setState({ language: 'english', image: usa });
        this.languageHandler('english');
    }

    frenchHandler = () => {
        this.setState({ language: 'french', image: france });
        this.languageHandler('french');
    }

    languageHandler = (language) => {
        this.props.changeLanguage(language);
    }

    render() {
        return (
            <div className={classes.dropdown}>
                <button className={classes.dropbtn}><img className={classes.svg} src={this.state.image} alt=""></img></button>
                <div className={classes.dropdownContent}>
                    <button onClick={this.portugueseHandler}><img className={classes.svg} src={brazil} alt=""></img></button>
                    <button onClick={this.englishHandler}><img className={classes.svg} src={usa} alt=""></img></button>
                    <button onClick={this.frenchHandler}><img className={classes.svg} src={france} alt=""></img></button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeLanguage: (language) => dispatch(actions.changeLanguage(language))
    }
}

export default connect(null, mapDispatchToProps)(LanguageSelector);