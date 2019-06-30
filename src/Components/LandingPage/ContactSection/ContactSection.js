import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';

import classes from './css/ContactSection.module.css';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';

class ContactSection extends Component {

    onShow(entries) {
        this.props.changeSection('contact');
    }

    render() {
        return (
            <IntersectionVisible onShow={e => this.onShow(e)}>
                <div ref={this.props.forwardRef} style={{ backgroundColor: '#9e8a0f' }}>
                    <TransitionDiv bgColor="#b69c00" title={this.props.language === 'portuguese' ? 'Contato' :
                        this.props.language === 'english' ? 'Contact' :
                            this.props.language === 'french' ? 'Nous contacter' : ''} />
                    <div className={classes.contactContainer}>
                        <div className={classes.titleContainer}>
                            <h1 className={classes.title}>Orquestra Sanfônica Balaio Nordeste! <span>&</span></h1>
                        </div>
                        <div className={classes.social}>
                            <h1>{this.props.language === 'portuguese' ? 'Nos siga nas Redes Sociais!' :
                                this.props.language === 'english' ? 'Follow us on Social Media!' :
                                    this.props.language === 'french' ? 'Suivez nous sur les réseaux sociaux!' : ''}</h1>
                            <div className={classes.socialMedia}>
                                <a href="https://www.youtube.com/channel/UCM6Z3B0OVdpLU8b7Qxe0hEA"><img className={classes.svg} src={require('../../../assets/svgs/youtubeFooter.svg')} alt=""></img></a>
                                <a href="https://www.facebook.com/orquestrasanfonicabn/"><img className={classes.svg} src={require('../../../assets/svgs/facebookFooter.svg')} alt=""></img></a>
                                <a href="https://www.instagram.com/orquestra.balaionordeste/"><img className={classes.svg} src={require('../../../assets/svgs/instagramFooter.svg')} alt=""></img></a>
                            </div>
                        </div>
                        <div className={classes.contact}>
                            <h1>{this.props.language === 'portuguese' ? 'Entre em Contato!' :
                                this.props.language === 'english' ? 'Contact us!' :
                                    this.props.language === 'french' ? 'Contactez nous!' : ''}</h1>
                            <div className={classes.contactMedia}>
                                <div className={classes.wppDiv}>
                                    <img className={classes.svg} src={require('../../../assets/svgs/whatsappFooter.svg')} alt="" />
                                    <h2>(83) 98872-2278</h2>
                                </div>
                                <div className={classes.emailDiv}>
                                    <img className={classes.svg} src={require('../../../assets/svgs/emailFooter.svg')} alt="" />
                                    <h2>orquestra.balaionordeste@gmail.com</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IntersectionVisible>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language,
        section: state.languageReducer.section
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSection: (section) => dispatch(actions.changeSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSection);