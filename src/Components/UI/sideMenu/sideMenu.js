import React, { Component } from 'react';
import classes from './css/sideMenu.module.css';

import LanguageSelector from '../../UI/languageSelector/languageSelector';

class sideMenu extends Component {

    state = {
        show: false
    }

    onCloseHandler = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    render() {

        return (
            <>
                <div className={classes.subMenu} style={{
                    transform: this.state.show ? 'translateX(100vh)' : 'translateX(0)',
                    visibility: this.state.show ? 'hidden' : 'visible',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    <div className={classes.closeDiv} onClick={this.onCloseHandler}>
                        <span className={classes.subTooltip}>Abrir Menu</span>
                        <h1 className={classes.subText}>&</h1>
                    </div>
                    <div className={classes.languageContainer}>
                        <LanguageSelector />
                    </div>
                </div>
                <div className={classes.menu}
                    style={{
                        transform: this.props.show && this.state.show ? 'translateX(0)' : 'translateX(100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    <div className={classes.closeButton}>
                        <span className={classes.tooltipText}>Fechar Menu</span>
                        <h2 onClick={this.onCloseHandler} className={classes.title}>&</h2>
                    </div>
                    <div className={classes.historyButton}>
                        <span className={classes.historyTooltip}>Histórico</span>
                        <button className={this.props.section === 'history' ? classes.Button + ' ' + classes.active : classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/book.svg')}></img></button>
                    </div>
                    <div className={classes.galleryButton}>
                        <span className={classes.galleryTooltip}>Galeria</span>
                        <button className={this.props.section === 'gallery' ? classes.Button + ' ' + classes.active : classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/portrait.svg')}></img></button>
                    </div>
                    <div className={classes.scheduleButton}>
                        <span className={classes.scheduleTooltip}>Agenda</span>
                        <button className={this.props.section === 'schedule' ? classes.Button + ' ' + classes.active : classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/calendar.svg')}></img></button>
                    </div>
                    <div className={classes.newsButton}>
                        <span className={classes.newsTooltip}>Notícias</span>
                        <button className={this.props.section === 'news' ? classes.Button + ' ' + classes.active : classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/news.svg')}></img></button>
                    </div>
                    <div className={classes.techButton}>
                        <span className={classes.techTooltip}>Tecnica</span>
                        <button className={this.props.section === 'technical' ? classes.Button + ' ' + classes.active : classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/accordion.svg')}></img></button>
                    </div>
                    <div className={classes.socialButton}>
                        <span className={classes.socialTooltip}>Social</span>
                        <button className={this.props.section === 'contact' ? classes.Button + ' ' + classes.active : classes.Button}><img alt="" className={classes.svg} src={require('../../../assets/svgs/facebook.svg')}></img></button>
                    </div>
                </div>
            </>
        );
    }
}

export default sideMenu;