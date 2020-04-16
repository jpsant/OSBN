import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';
import LazyLoad from 'react-lazy-load';

import TransitionDiv from '../../UI/transitionDiv';
import GalleryImage from '../../UI/galleryImage';
import Backdrop from '../../UI/backDrop';
import Modal from '../../UI/modal/modal';

export default function GallerySection({ forwardRef }) {

  const language = useSelector(state => state.languageReducer.language);
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState(false);

  function onShow() {
    dispatch(actions.changeSection('gallery'));
    setShow(true);
  }

  function openHandler(image) {
    setImage(image);
    setModal(true);
  }

  function closeHandler() {
    setImage(null);
    setModal(false);
  }

  return (
    <>
      <IntersectionVisible onShow={onShow}>
        <div ref={forwardRef} className="gallery-section">
          <TransitionDiv show={show} bgColor="#b69c00" title={language === 'portuguese' ? 'Galeria' :
            language === 'english' ? 'Gallery' : language === 'french' ? 'Galerie' : ''} />
          <div className="gallery-section-gallery-container">
            <LazyLoad debounce={false} throttle={250}>
              <GalleryImage clicked={() => openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.webp?alt=media&token=63866687-25b3-4639-9388-c78328d734ee')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%206.webp?alt=media&token=63866687-25b3-4639-9388-c78328d734ee" />
            </LazyLoad>
            <LazyLoad debounce={false} throttle={250}>
              <GalleryImage clicked={() => openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%209.webp?alt=media&token=3f65d9c6-20b3-4836-8081-724b7611edbf')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-%20divulga%C3%A7%C3%A3o%209.webp?alt=media&token=3f65d9c6-20b3-4836-8081-724b7611edbf" />
            </LazyLoad>
            <LazyLoad debounce={false} throttle={250}>
              <GalleryImage clicked={() => openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-divulga%C3%A7%C3%A3o%205.webp?alt=media&token=651e1cb5-ddc8-42ac-a45a-e9fb572af54a')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2FFoto%20-divulga%C3%A7%C3%A3o%205.webp?alt=media&token=651e1cb5-ddc8-42ac-a45a-e9fb572af54a" />
            </LazyLoad>
            <LazyLoad debounce={false} throttle={250}>
              <GalleryImage clicked={() => openHandler('https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Ffoto%20-%20divulga%C3%A7%C3%A3o%2010.webp?alt=media&token=8a867fc4-f8d3-4880-91dc-c8d83472b2bf')} image="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Ffoto%20-%20divulga%C3%A7%C3%A3o%2010.webp?alt=media&token=8a867fc4-f8d3-4880-91dc-c8d83472b2bf" />
            </LazyLoad>
          </div>
          <NavLink to="/gallery" className="gallery-section-galleryButton">{language === 'portuguese' ? 'Ir para Galeria!' :
            language === 'english' ? 'Visit the Gallery!' :
              language === 'french' ? 'Aller à la galerie!' : ''}</NavLink>
        </div>
        <Backdrop show={modal} clicked={closeHandler} />
        <Modal show={modal}>
          <div className="gallery-image-container">
            <img className="gallery-image-container-img" alt="" src={image}></img>
          </div>
        </Modal>
      </IntersectionVisible>
    </>
  );
}