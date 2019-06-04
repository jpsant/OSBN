import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './css/Gallery.module.css';

import LanguageSelector from '../UI/languageSelector/languageSelector';

class Gallery extends Component {

    render() {
        return (
            <>
                <LanguageSelector />
                <div className={classes.galleryContainer}>
                <div className={classes.titleContainer}>
                    <h1>{this.props.language === 'portuguese' ? '& Galeria' : 
                    this.props.language === 'english' ? '& Gallery' : 
                    this.props.language === 'french' ? '& Galerie' : ''}</h1>
                </div>
                <div className={classes.galleryContent}>
                    <h1>content!</h1>
                </div>
                    <NavLink to="/" >voltar</NavLink>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(Gallery);