import React from 'react';
import classes from './css/loadingScreen.module.css';

const loadingScreen = (props) => {
    return (
        <div style={{
            opacity: props.show ? '1' : '0',
            visibility: props.show ? 'visible' : 'hidden',
        }} className={classes.container}>
            <div className={classes.textContainer} style={{ opacity: props.show ? '1' : '0'}}>
                <h1 className={classes.title}  style={{ opacity: props.show ? '1' : '0', visibility: props.show ? 'visible' : 'hidden'}} >Orquestra Sanfônica Balaio Nordeste!</h1>
                <img src={require('../../../assets/logo6.png')} alt="" className={classes.logo}></img>
                <h1  style={{ opacity: props.show ? '1' : '0', visibility: props.show ? 'visible' : 'hidden'}}>&</h1>
                <h1  style={{ opacity: props.show ? '1' : '0', visibility: props.show ? 'visible' : 'hidden'}}> Loading...</h1>
                <img className={classes.topLeft} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
                <img className={classes.topRight} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
                <img className={classes.bottomLeft} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
                <img className={classes.bottomRight} src={require('../../../assets/OSBNBORDAS/border.png')}></img>
            </div>
        </div>
    );
}

export default loadingScreen;