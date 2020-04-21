import React, { useState } from 'react';
import { isAuthenticated } from '../Authentication';
import { useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './styles.scss';
import './animations.css';

import NewsEditor from '../UI/NewsEditor';
import NewsAdder from '../UI/NewsAdder';
import GalleryEditor from '../UI/GalleryEditor';
import Menu from '../UI/Menu';

export default function PageManager() {
  const [currentSection, setCurrentSection] = useState('menu');
  const token = useSelector(state => state.authReducer.idToken !== null);

  function newsAddHandler() {
    currentSection === 'newsAdd' ? setCurrentSection('menu') : setCurrentSection('newsAdd');
  }

  function newsEditHandler() {
    currentSection === 'newsEdit' ? setCurrentSection('menu') : setCurrentSection('newsEdit');
  }

  function galleryEditHandler() {
    currentSection === 'galleryEdit' ? setCurrentSection('menu') : setCurrentSection('galleryEdit')
  }

  return (
    <div className="page-manager-container">
      {isAuthenticated(token, '/login')}
      <SwitchTransition>
        <CSSTransition in={currentSection}
          key={currentSection}
          timeout={300}
          classNames="slide"
          unmountOnExit>
          {
            currentSection === 'newsAdd' ? <NewsAdder clicked={newsAddHandler} /> :
              currentSection === 'newsEdit' ? <NewsEditor clicked={newsEditHandler} /> :
                currentSection === 'galleryEdit' ? <GalleryEditor clicked={galleryEditHandler} /> :
                  currentSection === 'menu' ? <Menu newsAdd={newsAddHandler} newsEdit={newsEditHandler} galleryEdit={galleryEditHandler} /> :
                    null
          }
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}