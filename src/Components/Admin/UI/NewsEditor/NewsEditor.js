import React, {Component} from 'react';

class NewsEditor extends Component {
    render() {
        return (
            <>
                <h1>newsEditor!</h1>
                <button onClick={this.props.clicked}>votar</button>
            </>
        )
    }
}

export default NewsEditor;