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
            <h2 className={classes.title}>&</h2>
            <button className={props.section == 'history' ? classes.historyButton + ' ' + classes.active : classes.historyButton}><img alt="" className={classes.svg} src={require('../../../assets/svgs/book.svg')}></img></button>
            <button className={props.section == 'gallery' ? classes.historyButton + ' ' + classes.active : classes.historyButton}><img alt="" className={classes.svg} src={require('../../../assets/svgs/portrait.svg')}></img></button>
            <button className={props.section == 'schedule' ? classes.historyButton + ' ' + classes.active : classes.historyButton}><img alt="" className={classes.svg} src={require('../../../assets/svgs/calendar.svg')}></img></button>
            <button className={props.section == 'news' ? classes.historyButton + ' ' + classes.active : classes.historyButton}><img alt="" className={classes.svg} src={require('../../../assets/svgs/news.svg')}></img></button>
            <button className={props.section == 'technical' ? classes.historyButton + ' ' + classes.active : classes.historyButton}><img alt="" className={classes.svg} src={require('../../../assets/svgs/accordion.svg')}></img></button>
            <button className={props.section == 'contact' ? classes.historyButton + ' ' + classes.active : classes.historyButton}><img alt="" className={classes.svg} src={require('../../../assets/svgs/facebook.svg')}></img></button>
        </div>
    );
}

export default sideMenu;