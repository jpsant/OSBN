import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv';

export default function ContactSection({ forwardRef }) {
  const language = useSelector(state => state.languageReducer.language);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  function onShow() {
    dispatch(actions.changeSection('contact'));
    setShow(true);
  }

  return (
    <IntersectionVisible onShow={onShow}>
      <div ref={forwardRef} style={{ backgroundColor: '#9e8a0f' }}>
        <TransitionDiv show={show} bgColor="#b69c00" title={language === 'portuguese' ? 'Contato' :
          language === 'english' ? 'Contact' :
            language === 'french' ? 'Nous contacter' : ''} />
        <div className="contact-container">
          <div className="contact-container__titleContainer">
            <h1 className="contact-container__titleContainer-title">Orquestra Sanfônica Balaio Nordeste <span>&</span></h1>
          </div>
          <div className="contact-container__social">
            <h1>{language === 'portuguese' ? 'Nos siga nas Redes Sociais !' :
              language === 'english' ? 'Follow us on Social Media !' :
                language === 'french' ? 'Suivez nous sur les réseaux sociaux !' : ''}</h1>
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
            <h1>{language === 'portuguese' ? 'Entre em Contato' :
              language === 'english' ? 'Contact us' :
                language === 'french' ? 'Contactez nous' : ''}</h1>
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
  );
};