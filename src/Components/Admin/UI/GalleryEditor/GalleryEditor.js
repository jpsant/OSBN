import React, {Component} from 'react';

class GalleryEditor extends Component {
    render() {
        return (
            <>
                <h1>GalleryEditor!</h1>
                <button onClick={this.props.clicked}>votar</button>
            </>
        )
    }
}

export default GalleryEditor;