import React from 'react';

import './styles.scss';
import { Fade } from 'react-reveal';

const scheduleDiv = (props) => {
    return (
        <>
            <Fade right>
                <div className="schedule-div-container">
                    <div className="schedule-div-container__date">
                        <h1>{props.date}</h1>
                    </div>
                    <div className="schedule-div-container__event">
                        <h2>{props.event}</h2>
                        <a className="schedule-div-container__event-button" href={props.link}> {props.language === 'portuguese' ? 'Comprar Ingresso' :
                            props.language === 'english' ? 'Buy Ticket' : props.language === 'french' ? 'Acheter un Billet' : ''} </a>
                    </div>
                    <div className="schedule-div-container__local">
                        <a className="schedule-div-container__local-map" href={props.maps}>{props.local}</a>
                    </div>
                </div>
            </Fade>
        </>
    );
}

export default scheduleDiv;