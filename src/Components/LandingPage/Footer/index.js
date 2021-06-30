import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

export default function Footer() {
  // const language = useSelector(state => state.languageReducer.language);

  return (
    <div className="footer-container">
      <div className="footer-container__footer-image">
        <img alt="" className="footer-container__footer-image-logo" src={require('../../../assets/logo3.svg')}></img>
        {/* <img alt="" className="footer-container__footer-image-logo" src={require('../../../assets/logo.svg')}></img> */}
      </div>
      <div className="footer-container__vertical-line"></div>
      <div className="footer-container__footer-text">
        <div className="footer-container__footer-text-text-container">
          <h1 className="footer-container__footer-text-text-container-text">Orquestra Sanfônica Balaio Nordeste</h1>
          <h1 className="footer-container__footer-text-text-container-text">&</h1>
          <h2>Copyright © OSBN 2021</h2>
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