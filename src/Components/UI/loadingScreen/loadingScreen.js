import React from 'react';
import classes from './css/loadingScreen.module.css';
import { Fade } from 'react-reveal';

const loadingScreen = (props) => {
    return (
        <div style={{
            opacity: props.show ? '1' : '0',
            visibility: props.show ? 'visible' : 'hidden',
        }} className={classes.container}>
            <div className={classes.textContainer} style={{ opacity: props.show ? '1' : '0' }}>
                <Fade bottom duration={1700} delay={200}>
                    <h1 className={classes.title} style={{ opacity: props.show ? '1' : '0', visibility: props.show ? 'visible' : 'hidden' }} >Orquestra Sanfônica Balaio Nordeste</h1>
                </Fade>
                <img src={require('../../../assets/logo6.png')} alt="" className={classes.logo}></img>
                <Fade top duration={1400} delay={400}>
                    <h1 style={{ opacity: props.show ? '1' : '0', visibility: props.show ? 'visible' : 'hidden' }}>&</h1>
                </Fade>
                <img alt="" className={classes.topLeft} src={require('../../../assets/OSBNBORDAS/half.png')}></img>
                <img alt="" className={classes.topRight} src={require('../../../assets/OSBNBORDAS/half.png')}></img>
                <img alt="" className={classes.bottomLeft} src={require('../../../assets/OSBNBORDAS/half.png')}></img>
                <img alt="" className={classes.bottomRight} src={require('../../../assets/OSBNBORDAS/half.png')}></img>
            </div>
        </div>
    );
}

export default loadingScreen;