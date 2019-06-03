import React, { Component } from 'react';
import classes from './css/Gallery.module.css';
import { NavLink } from 'react-router-dom';

class Gallery extends Component {
    render() {
        return (
            <>
                <h1>gallery!</h1>
                <NavLink to="/" >volta</NavLink>
            </>
        )
    }
}

export default Gallery;