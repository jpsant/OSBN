import React from 'react';
import './styles.scss';

const imageEditorCards = (props) => {
    return (
        <div className="image-editor-container" onClick={props.clicked}>
            <img className="image-editor-container" alt="#" src={props.image}></img>
        </div>
    );
}

export default imageEditorCards;