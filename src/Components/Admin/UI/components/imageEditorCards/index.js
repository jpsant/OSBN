import React from 'react';
import './styles.scss';

const imageEditorCards = ({ clicked, image }) => {
    return (
        <div className="image-editor-container" onClick={clicked}>
            <img className="image-editor-container" alt="#" src={image}></img>
        </div>
    );
}

export default imageEditorCards;