import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './css/Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={classes.footerContainer}>
                <div className={classes.footerImage}>
                    <img alt="" className={classes.logo} src={require('../../../assets/logo6.png')}></img>
                </div>
                <div className={classes.footerText}>
                    <div className={classes.textContainer}>
                        <h1 className={classes.text}>Orquestra Sanfônica Balaio Nordeste</h1>
                        <h1 className={classes.text}>&</h1>
                        <h2>Copyright © OSBN 2018</h2>
                    </div>
                </div>
                {/* <div className={classes.contactText}>
                    <div className={classes.container}>
                        <h2>{this.props.language === 'portuguese' ? 'Desenvolvido e mantido por' :
                            this.props.language === 'english' ? 'Developed and maintained by' : 
                            this.props.language === 'french' ? 'Développé et maintenu par' : ''}</h2>
                        <h1>João Paulo Santana</h1>
                    </div>
                    <div className={classes.socialMedia}>
                        <a href="https://portfolio-6de84.firebaseapp.com/"><img className={classes.svg} alt="" src={require('../../../assets/svgs/profile.svg')}></img></a>
                        <a href="https://github.com/jpsant"><img className={classes.svg} alt="" src={require('../../../assets/svgs/github.svg')}></img></a>
                        <a href="https://www.instagram.com/jampalo_/"><img className={classes.svg} alt="" src={require('../../../assets/svgs/instagram.svg')}></img></a>
                    </div>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    }
}

export default connect(mapStateToProps) (Footer);