import React from 'react';
import './styles.scss'

const newsEditorCards = (props) => {
    return (
        <div onClick={props.clicked} className="news-editor-container-card">
            <div className="news-editor-container-card-titleContainer">
                <h1>{props.title}</h1>
            </div>
            <div className="news-editor-container-card__imageContainer">
                <img alt="" className="news-editor-container-card__imageContainer-image" src={props.image}></img>
            </div>
            <div className="news-editor-container-card-contentContainer">
                <h2>{props.content}</h2>
            </div>
        </div>
    );
}

export default newsEditorCards;