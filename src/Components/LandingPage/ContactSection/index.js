import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv';

class ContactSection extends Component {

    state = {
        show: false
    }

    onShow() {
        this.props.changeSection('contact');
        this.setState({ show: true })
    }

    render() {
        return (
            <IntersectionVisible onShow={e => this.onShow(e)}>
                <div ref={this.props.forwardRef} style={{ backgroundColor: '#9e8a0f' }}>
                    <TransitionDiv show={this.state.show} bgColor="#b69c00" title={this.props.language === 'portuguese' ? 'Contato' :
                        this.props.language === 'english' ? 'Contact' :
                            this.props.language === 'french' ? 'Nous contacter' : ''} />
                    <div className="contact-container">
                        <div className="contact-container__titleContainer">
                            <h1 className="contact-container__titleContainer-title">Orquestra Sanfônica Balaio Nordeste <span>&</span></h1>
                        </div>
                        <div className="contact-container__social">
                            <h1>{this.props.language === 'portuguese' ? 'Nos siga nas Redes Sociais !' :
                                this.props.language === 'english' ? 'Follow us on Social Media !' :
                                    this.props.language === 'french' ? 'Suivez nous sur les réseaux sociaux !' : ''}</h1>
                            <div className="contact-container__social-socialMedia">
                                <a className="contact-container__social-socialMedia-a" href="https://www.youtube.com/channel/UCM6Z3B0OVdpLU8b7Qxe0hEA">
                                    <img className="contact-container__social-socialMedia-a-svg" src={require('../../../assets/svgs/youtubeFooter.svg')} alt="" />
                                </a>
                                <a className="contact-container__social-socialMedia-a" href="https://www.facebook.com/orquestrasanfonicabn/">
                                    <img className="contact-container__social-socialMedia-a-svg" src={require('../../../assets/svgs/facebookFooter.svg')} alt="" />
                                </a>
                                <a className="contact-container__social-socialMedia-a" href="https://www.instagram.com/orquestra.balaionordeste/">
                                    <img className="contact-container__social-socialMedia-a-svg" src={require('../../../assets/svgs/instagramFooter.svg')} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="contact-container__contact">
                            <h1>{this.props.language === 'portuguese' ? 'Entre em Contato' :
                                this.props.language === 'english' ? 'Contact us' :
                                    this.props.language === 'french' ? 'Contactez nous' : ''}</h1>
                            <div className="contact-container__contact__contactMedia">
                                <div className="contact-container__contact__contactMedia-wppDiv">
                                    <img className="contact-container__contact__contactMedia-wppDiv-img" src={require('../../../assets/svgs/whatsappFooter.svg')} alt="" />
                                    <h2>Contato para Produção: (83) 99922-3749</h2>
                                </div>
                                <div className="contact-container__contact__contactMedia-emailDiv">
                                    <img className="contact-container__contact__contactMedia-img" src={require('../../../assets/svgs/emailFooter.svg')} alt="" />
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