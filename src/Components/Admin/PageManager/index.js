import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import CSSTransition from 'react-transition-group/CSSTransition';

import './styles.scss';
import './animations.css';

import NewsEditor from '../UI/NewsEditor/NewsEditor';
import NewsAdder from '../UI/NewsAdder';
import GalleryEditor from '../UI/GalleryEditor';
import Menu from '../UI/Menu';

class PageManager extends Component {

    state = {
        newsAdd: false,
        newsEdit: false,
        galleryEdit: false,
        menu: true
    }

    newsAddHandler = () => {
        if (this.state.menu === false) {
            this.setState(prevState => ({
                newsAdd: !prevState.newsAdd
            }))
        } else {
            this.setState({menu: false});
            setTimeout(() => {
                this.setState(prevState => ({
                    newsAdd: !prevState.newsAdd
                }))
            }, 300);
        }
    }

    newsEditHandler = () => {
        if (this.state.menu === false) {
            this.setState(prevState => ({
                newsEdit: !prevState.newsEdit
            }))
        } else {
            this.setState({menu: false});
            setTimeout(() => {
                this.setState(prevState => ({
                    newsEdit: !prevState.newsEdit
                }))
            }, 300);
        }
    }

    galleryEditHandler = () => {
        if (this.state.menu === false) {
            this.setState(prevState => ({
                galleryEdit: !prevState.galleryEdit
            }))
        } else {
            this.setState({menu: false});
            setTimeout(() => {
                this.setState(prevState => ({
                    galleryEdit: !prevState.galleryEdit
                }))
            }, 350);
        }
    }


    render() {

        let cookie = Cookies.get('acess_token');
        let redirect = null;

        if (this.props.token === false) {
            if (cookie === undefined) {
                redirect = <Redirect to="/" />
            } else {
                redirect = null
            }
        }

        return (

            <div className="page-manager-container">
                {redirect}
                <CSSTransition in={this.state.newsAdd}
                    timeout={300}
                    classNames="slide"
                    onExited={() => this.setState({ menu: true })}
                    onEnter={() => this.setState({ menu: false })}
                    unmountOnExit>
                    <NewsAdder clicked={this.newsAddHandler} />
                </CSSTransition>

                <CSSTransition in={this.state.newsEdit}
                    timeout={300}
                    classNames="slide"
                    onExited={() => this.setState({ menu: true })}
                    onEnter={() => this.setState({ menu: false })}
                    unmountOnExit>
                    <NewsEditor clicked={this.newsEditHandler} />
                </CSSTransition>

                <CSSTransition in={this.state.galleryEdit}
                    timeout={300}
                    classNames="slide"
                    onExited={() => this.setState({ menu: true })}
                    onEnter={() => this.setState({ menu: false })}
                    unmountOnExit>
                    <GalleryEditor clicked={this.galleryEditHandler} />
                </CSSTransition>

                <CSSTransition in={this.state.menu}
                    timeout={300}
                    classNames="alert"
                    onExiting={() => this.setState({ menu: false })}
                    unmountOnExit>
                    <Menu newsAdd={this.newsAddHandler} newsEdit={this.newsEditHandler} galleryEdit={this.galleryEditHandler} />
                </CSSTransition>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.authReducer.idToken !== null
    }
}

export default connect(mapStateToProps)(PageManager);