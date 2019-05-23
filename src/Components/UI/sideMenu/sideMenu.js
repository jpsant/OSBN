import React from 'react';
import classes from './css/sideMenu.module.css';

const sideMenu = (props) => {
    return (
        <div className={classes.menu}
            style={{
                transform: props.show ? 'translateX(0)' : 'translateX(100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            <button className={classes.button}>Tst</button>
            <button className={classes.button}>Tst</button>
            <button className={classes.button}>Tst</button>
            <button className={classes.button}>Tst</button>
            <button className={classes.button}>Tst</button>
            <button className={classes.button}>Tst</button>
            <button className={classes.button}>Tst</button>
        </div>
    );
}

export default sideMenu;