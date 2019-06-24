import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';

import classes from './css/PageManager.module.css';
import './css/animations.css';

import NewsEditor from '../UI/NewsEditor/NewsEditor';
import NewsAdder from '../UI/NewsAdder/NewsAdder';
import GalleryEditor from '../UI/GalleryEditor/GalleryEditor';
import Menu from '../UI/Menu/Menu';

class PageManager extends Component {

    state = {
        newsAdd: false,
        newsEdit: false,
        galleryEdit: false,
        menu: true
    }

    newsAddHandler = () => {
        this.setState(prevState => ({
            newsAdd: !prevState.newsAdd
        }));
    }

    newsEditHandler = () => {
        this.setState(prevState => ({
            newsEdit: !prevState.newsEdit
        }));
    }

    galleryEditHandler = () => {
        this.setState(prevState => ({
            galleryEdit: !prevState.galleryEdit
        }));
    }


    render() {

        let redirect = null;
        if (this.props.token === null) {
            redirect = <Redirect to="/" />
        }

        return (

            <div className={classes.container}>
                <CSSTransition in={this.state.newsAdd}
                    timeout={300}
                    classNames="slide"
                    onExited={() => this.setState({menu: true})}
                    onEnter={() => this.setState({menu: false})}
                    unmountOnExit>
                    <NewsAdder clicked={this.newsAddHandler} />
                </CSSTransition>

                <CSSTransition in={this.state.newsEdit}
                    timeout={300}
                    classNames="slide"
                    onExited={() => this.setState({menu: true})}
                    onEnter={() => this.setState({menu: false})}
                    unmountOnExit>
                    <NewsEditor clicked={this.newsEditHandler} />
                </CSSTransition>

                <CSSTransition in={this.state.galleryEdit}
                    timeout={300}
                    classNames="slide"
                    onExited={() => this.setState({menu: true})}
                    onEnter={() => this.setState({menu: false})}
                    unmountOnExit>
                    <GalleryEditor clicked={this.galleryEditHandler} />
                </CSSTransition>

                <CSSTransition in={this.state.menu}
                    timeout={300}
                    classNames="alert"
                    onExiting={() => this.setState({menu: false})}
                    unmountOnExit>
                    <Menu newsAdd={this.newsAddHandler} newsEdit={this.newsEditHandler} galleryEdit={this.galleryEditHandler} />
                </CSSTransition>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.idToken
    }
}

export default connect(mapStateToProps)(PageManager);