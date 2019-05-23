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
            <button className={props.section == 'history' ? classes.historyButton + ' ' + classes.active : classes.historyButton}>Hero</button>
            <button className={props.section == 'gallery' ? classes.historyButton + ' ' + classes.active : classes.historyButton}>Gall</button>
            <button className={props.section == 'schedule' ? classes.historyButton + ' ' + classes.active : classes.historyButton}>schel</button>
            <button className={props.section == 'news' ? classes.historyButton + ' ' + classes.active : classes.historyButton}>news</button>
            <button className={props.section == 'technical' ? classes.historyButton + ' ' + classes.active : classes.historyButton}>tech</button>
            <button className={props.section == 'contact' ? classes.historyButton + ' ' + classes.active : classes.historyButton}>conta</button>
        </div>
    );
}

export default sideMenu;