import React from 'react';
import classes from './css/loadingScreen.module.css';

const loadingScreen = (props) => {
    return (
        <div style={{
            opacity: props.show ? '1' : '0',
            visibility: props.show ? 'visible' : 'hidden'
        }} className={classes.container}>
            <div className={classes.textContainer}>
                <h1 className={classes.title}>Orquestra Sanfônica Balaio Nordeste!</h1>
                <img src={require('../../../assets/logo6.png')} alt="" className={classes.logo}></img>
                <h1>&</h1>
                <h1>Loading...</h1>
                <img className={classes.topLeft} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
                <img className={classes.topRight} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
                <img className={classes.bottomLeft} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
                <img className={classes.bottomRight} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
            </div>
        </div>
    );
}

export default loadingScreen;