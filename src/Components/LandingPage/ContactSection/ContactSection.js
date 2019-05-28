import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './css/ContactSection.module.css';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';

class ContactSection extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#AC7C44'}}>
                <TransitionDiv title={this.props.language === 'portuguese' ? '& Contato' : 
                this.props.language === 'english' ? '& Contact' : 
                this.props.language === 'french' ? '& Nous contacter' : ''} />
                <div className={classes.contactContainer}>
                    <div className={classes.titleContainer}>
                        <h1 className={classes.title}>Orquestra Sanfônica Balaio Nordeste! <span>&</span></h1>
                    </div>
                    <div className={classes.social}>
                        <h1>{this.props.language === 'portuguese' ? 'Nos siga nas Redes Sociais!' : 
                            this.props.language === 'english' ? 'Follow us on Social Media!' : 
                            this.props.language === 'french' ? 'Suivez nous sur les réseaux sociaux!' : ''}</h1>
                        <div className={classes.socialMedia}>
                            <h2>twitter</h2>
                            <h2>instagram</h2>
                            <h2>facebook</h2>
                        </div>
                    </div>
                    <div className={classes.contact}>
                        <h1>{this.props.language === 'portuguese' ? 'Entre em Contato!' : 
                            this.props.language === 'english' ? 'Contact us!' : 
                            this.props.language === 'french' ? 'Contactez nous!' : ''}</h1>
                        <div className={classes.contactMedia}>
                            <h2>contato1</h2>
                            <h2>contato2</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps)(ContactSection);