import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

import LanguageSelector from '../languageSelector/hooks';
import MobileMenu from '../mobileMenu/mobileMenu';
import MenuBackDrop from '../menuBackDrop/menuBackDrop';

class sideMenu extends Component {

    state = {
        show: false
    }

    onCloseHandler = () => {
        this.setState(prevState => ({
            show: !prevState.show
        }))
    }

    sectionChanger = (section) => {
        this.props.clicked(section);
        this.setState({ show: false });
    }

    render() {

        return (
            <>
                <MenuBackDrop show={this.state.show} clicked={this.onCloseHandler} />
                <MobileMenu language={this.props.language} buttonClicked={(section) => this.sectionChanger(section)} clicked={this.onCloseHandler} show={this.state.show} />
                <div className="subMenu" style={{
                    transform: this.state.show ? 'translateX(100vh)' : 'translateX(0)',
                    visibility: this.state.show ? 'hidden' : 'visible',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    <div className="subMenu__closeDiv" onClick={this.onCloseHandler}>
                        <span className="subMenu__closeDiv-subTooltip">{this.props.language === 'portuguese' ? 'Abrir Menu' :
                            this.props.language === 'english' ? 'Open Menu' :
                                this.props.language === 'french' ? 'Ouvrir le menu' : ''}</span>
                        <img className="subMenu__closeDiv-subText" alt="" src={require('../../../assets/logo2.svg')}></img>
                    </div>
                    <div className="subMenu-languageContainer">
                        <LanguageSelector show={0} />
                    </div>
                </div>
                <div className="menu"
                    style={{
                        transform: this.props.show && this.state.show ? 'translateX(0)' : 'translateX(100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    <div className="menu__closeButton">
                        <span className="menu__closeButton-tooltipText">{this.props.language === 'portuguese' ? 'Fechar Menu' :
                            this.props.language === 'english' ? 'Close Menu' :
                                this.props.language === 'french' ? 'Fermer le menu' : ''}</span>
                        <h2 onClick={this.onCloseHandler} style={{
                            color: this.props.section === 'history' ?
                                '#449376' : this.props.section === 'gallery' ? '#b69c00' : this.props.section === 'schedule' ?
                                    '#d35523' : this.props.section === 'news' ? '#c76d2b' : this.props.section === 'technical' ?
                                        '#449376' : this.props.section === 'contact' ? '#b69c00' : '#449376'
                        }} className="menu__closeButton-title">&</h2>
                    </div>
                    <div className="menu__historyButton">
                        <span className="menu__historyButton-historyTooltip">{this.props.language === 'portuguese' ? 'Histórico' :
                            this.props.language === 'english' ? 'History' :
                                this.props.language === 'french' ? 'Histoire' : ''}</span>
                        <button onClick={() => this.sectionChanger(1)} className={this.props.section === 'history' ? "greenButton active" : "greenButton"}><img alt="" className="side-menu-svg" src={require('../../../assets/svgs/book.svg')}></img></button>
                    </div>
                    <div className="menu__galleryButton">
                        <span className="menu__galleryButton-galleryTooltip">{this.props.language === 'portuguese' ? 'Galeria' :
                            this.props.language === 'english' ? 'Gallery' :
                                this.props.language === 'french' ? 'Galerie' : ''}</span>
                        <button onClick={() => this.sectionChanger(2)} className={this.props.section === 'gallery' ? "yellowButton active" : "yellowButton"}><img alt="" className="side-menu-svg" src={require('../../../assets/svgs/portrait.svg')}></img></button>
                    </div>
                    <div className="menu__scheduleButton">
                        <span className="menu__scheduleButton-scheduleTooltip">{this.props.language === 'portuguese' ? 'Agenda' :
                            this.props.language === 'english' ? 'Schedule' :
                                this.props.language === 'french' ? 'Agenda' : ''}</span>
                        <button onClick={() => this.sectionChanger(3)} className={this.props.section === 'schedule' ? "redButton active" : "redButton"}><img alt="" className="side-menu-svg" src={require('../../../assets/svgs/calendar.svg')}></img></button>
                    </div>
                    <div className="menu__newsButton">
                        <span className="menu__newsButton-newsTooltip">{this.props.language === 'portuguese' ? 'Notícias' :
                            this.props.language === 'english' ? 'News' :
                                this.props.language === 'french' ? 'Nouvelles' : ''}</span>
                        <button onClick={() => this.sectionChanger(4)} className={this.props.section === 'news' ? "brownButton active" : "brownButton"}><img alt="" className="side-menu-svg" src={require('../../../assets/svgs/news.svg')}></img></button>
                    </div>
                    <div className="menu__techButton">
                        <span className="menu__techButton-techTooltip">{this.props.language === 'portuguese' ? 'Repertório' :
                            this.props.language === 'english' ? 'Repertoire' :
                                this.props.language === 'french' ? 'Répertoire' : ''}</span>
                        <button onClick={() => this.sectionChanger(5)} className={this.props.section === 'technical' ? "greenButton active" : "greenButton"}><img alt="" className="side-menu-svg" src={require('../../../assets/svgs/accordion.svg')}></img></button>
                    </div>
                    <div className="menu__socialButton">
                        <span className="menu__socialButton-socialTooltip">{this.props.language === 'portuguese' ? 'Social' :
                            this.props.language === 'english' ? 'Social' :
                                this.props.language === 'french' ? 'Social' : ''}</span>
                        <button onClick={() => this.sectionChanger(6)} className={this.props.section === 'contact' ? "yellowButton active" : "yellowButton"}><img alt="" className="side-menu-svg" src={require('../../../assets/svgs/facebook.svg')}></img></button>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language,
        section: state.languageReducer.section
    }
}

export default connect(mapStateToProps)(sideMenu);