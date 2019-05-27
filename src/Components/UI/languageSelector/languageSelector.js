import React, { Component } from 'react';
import classes from './css/languageSelector.module.css';

class LanguageSelector extends Component {

    state = {
        language: 'portuguese'
    }

    portugueseHandler = (event) => {
        this.setState({ language: 'portuguese' });
    }

    englishHandler = (event) => {
        this.setState({ language: 'english' });
    }

    frenchHandler = (event) => {
        this.setState({ language: 'french' });
    }

    render() {
        console.log(this.state.language);
        return (
            <div className={classes.dropdown}>
                <button className={classes.dropbtn}>{this.state.language}</button>
                <div className={classes.dropdownContent}>
                    <a onClick={this.portugueseHandler} href="#">portuguese</a>
                    <a onClick={this.englishHandler} href="#">english</a>
                    <a onClick={this.frenchHandler} href="#">french</a>
                </div>
            </div>
        )
    }
}

export default LanguageSelector;