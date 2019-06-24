import React, {Component} from 'react';
import classes from './css/GalleryEditor.module.css';

class GalleryEditor extends Component {
    render() {
        return (
            <>
            <div className={classes.container}>
                <h1>GalleryEditor!</h1>
                <button onClick={this.props.clicked}>votar</button>
            </div>
            </>
        )
    }
}

export default GalleryEditor;