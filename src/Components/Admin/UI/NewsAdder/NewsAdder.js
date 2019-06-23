import React, {Component} from 'react';

class NewsAdder extends Component {
    render() {
        return (
            <>
                <h1>NewsAdder!</h1>
                <button onClick={this.props.clicked}>votar</button>
            </>
        )
    }
}

export default NewsAdder;