import React from 'react';

import classes from './css/scheduleDiv.module.css';
import { Fade } from 'react-reveal';

const scheduleDiv = (props) => {
    return (
        <>
            <Fade right>
                <div className={classes.container}>
                    <div className={classes.date}>
                        <h1>{props.date}</h1>
                    </div>
                    <div className={classes.event}>
                        <h2>{props.event}</h2>
                        <a className={classes.button} href={props.link}> {props.language === 'portuguese' ? 'Comprar Ingresso' :
                            props.language === 'english' ? 'Buy Ticket' : props.language === 'french' ? 'Acheter un Billet' : ''} </a>
                    </div>
                    <div className={classes.local}>
                        <a className={classes.map} href={props.maps}>{props.local}</a>
                    </div>
                </div>
            </Fade>
        </>
    );
}

export default scheduleDiv;