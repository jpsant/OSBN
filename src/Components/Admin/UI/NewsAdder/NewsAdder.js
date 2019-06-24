import React, {Component} from 'react';
import classes from './css/NewsAdder.module.css';

class NewsAdder extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h1>NewsAdder!</h1>
                <button onClick={this.props.clicked}>votar</button>
            </div>
        )
    }
}

export default NewsAdder;