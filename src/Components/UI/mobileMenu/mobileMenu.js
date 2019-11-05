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
            </div>
            <div className={classes.buttonsContainer}>
            <div className={classes.history} onClick={() => props.buttonClicked(1)}>
                <h1>{props.language === 'portuguese' ? 'Histórico' : 
                props.language === 'english' ? 'History' : 
                props.language === 'french' ? 'Histoire' : ''}</h1>
                <button className={classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/book.svg')}></img></button>
            </div>
            <div className={classes.gallery} onClick={() => props.buttonClicked(2)}>
            <h1>{props.language === 'portuguese' ? 'Galeria' : 
                props.language === 'english' ? 'Gallery' : 
                props.language === 'french' ? 'Galerie' : ''}</h1>
                <button className={classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/portrait.svg')}></img></button>
            </div>
            <div className={classes.schedule} onClick={() => props.buttonClicked(3)}>
            <h1>{props.language === 'portuguese' ? 'Agenda' : 
                props.language === 'english' ? 'Schedule' : 
                props.language === 'french' ? 'Agenda' : ''}</h1>
                <button className={classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/calendar.svg')}></img></button>
            </div>
            <div className={classes.news} onClick={() => props.buttonClicked(4)}>
            <h1>{props.language === 'portuguese' ? 'Notícias' : 
                props.language === 'english' ? 'News' : 
                props.language === 'french' ? 'Nouvelles' : ''}</h1>
                <button className={classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/news.svg')}></img></button>
            </div>
            <div className={classes.technical} onClick={() => props.buttonClicked(5)}>
            <h1>{props.language === 'portuguese' ? 'Repertório' : 
                props.language === 'english' ? 'Repertoire' : 
                props.language === 'french' ? 'Répertoire' : ''}</h1>
                <button className={classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/accordion.svg')}></img></button>
            </div>
            <div className={classes.social} onClick={() => props.buttonClicked(6)}>
            <h1>{props.language === 'portuguese' ? 'Social' : 
                props.language === 'english' ? 'Social' : 
                props.language === 'french' ? 'Social' : ''}</h1>
                <button className={classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/facebook.svg')}></img></button>
            </div>
            </div>
        </div>
    )
}

export default mobileMenu;