import React from 'react';
import classes from './css/mobileMenu.module.css';

const mobileMenu = (props) => {
    return (
        <div className={classes.container} style={{
            transform: props.show ? 'translateX(0)' : 'translateX(100vh)'
        }}>
            <div className={classes.titleContainer}>
                <h1>Orquestra Sanfonica Balaio Nordeste</h1>
                <h1>&</h1>
                <hr></hr>
            </div>
            <div className={classes.buttonsContainer}>
                <button onClick={() => props.buttonClicked(1)}>section1</button>
                <button onClick={() => props.buttonClicked(2)}>section2</button>
                <button onClick={() => props.buttonClicked(3)}>section3</button>
                <button onClick={() => props.buttonClicked(4)}>section4</button>
                <button onClick={() => props.buttonClicked(5)}>section5</button>
                <button onClick={() => props.buttonClicked(6)}>section6</button>
            </div>
            <button onClick={props.clicked}>volta</button>
        </div>
    )
}

export default mobileMenu;