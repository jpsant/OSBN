import React, { Component } from 'react';
import classes from './css/ContactSection.module.css';

import TransitionDiv from '../../UI/transitionDiv/history/historyDiv';

class ContactSection extends Component {
    render() {
        return (
            <>
                <TransitionDiv title="& Contato" />
                <div className={classes.contactContainer}>
                    <h1 className={classes.title}>Orquestra Sanfônica Balaio Nordeste!</h1>
                    <div className={classes.social}>
                        <h1>Nos siga nas Redes Sociais!</h1>
                        <div className={classes.socialMedia}>
                            <h2>twitter</h2>
                            <h2>instagram</h2>
                            <h2>facebook</h2>
                        </div>
                    </div>
                    <div className={classes.contact}>
                        <h1>Entre em Contato!</h1>
                        <div className={classes.contactMedia}>
                            <h2>contato1</h2>
                            <h2>contato2</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactSection;