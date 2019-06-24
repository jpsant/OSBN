import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classes from './css/NewsEditor.module.css';

class NewsEditor extends Component {
    render() {
        return (
            <>
                <div className={classes.container}>
                    <h1>newsEditor!</h1>
                    <button onClick={this.props.clicked}>votar</button>
                </div>
            </>
        )
    }
}

export default NewsEditor;