import React from 'react';
import './styles.scss'

const newsEditorCards = ({ clicked, title, image, content}) => {
    return (
        <div onClick={clicked} className="news-editor-container-card">
            <div className="news-editor-container-card-titleContainer">
                <h1>{title}</h1>
            </div>
            <div className="news-editor-container-card__imageContainer">
                <img alt="" className="news-editor-container-card__imageContainer-image" src={image}></img>
            </div>
            <div className="news-editor-container-card-contentContainer">
                <h2>{content}</h2>
            </div>
        </div>
    );
}

export default newsEditorCards;