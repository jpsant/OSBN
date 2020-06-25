import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Helmet from 'react-helmet';

import './styles.scss';

import TransitionDiv from '../UI/transitionDiv'
import GalleryContent from '../UI/galleryContent/galleryContent';
import GalleryPanel from '../UI/galleryPanel/galleryPanel';
import Modal from '../UI/modal/modal';
import Backdrop from '../UI/backDrop';

import Languages from '../MultiLanguages/language';

export default function Gallery() {
  const language = useSelector(state => state.languageReducer.language)
  const [images, setImages] = useState([]);
  const [clipping, setClipping] = useState([]);

  useEffect(() => {
    axios.get('https://osbn-a36f9.firebaseio.com/galeria.json')
      .then(response => {
        setImages(response.data);
      })
    axios.get('https://osbn-a36f9.firebaseio.com/clipping.json')
      .then(response => {
        setClipping(response.data);
      })
  }, []);

  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Orquestra Sanfônica Balaio Nordeste Galeria</title>
        <meta name="description" content={Languages[language].gallery.helmet}></meta>
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />
      </Helmet>
      <div style={{ backgroundColor: '#b05f24' }}>
        <TransitionDiv show={true} bgColor="#c76d2b" title={Languages[language].gallery.transitionDiv} />
        <div className="gallery-container">
          <div className="gallery-container-galleryContent">
            {
              images.map(image => {
                return <GalleryContent clicked={() => { setModalImage(image.imagem); setModal(true); }} key={image.key} image={image.imagem} />
              })
            }
          </div>
          <div className="gallery-container__clipping">
            <div className="gallery-container__clipping-title">
              <TransitionDiv show={true} bgColor="#c76d2b" title="Clipping" />
            </div>
            <div className="gallery-container__clipping-image">
              {
                clipping.map(image => {
                  return <GalleryPanel clicked={() => { setModalImage(image.imagem); setModal(true); }} key={image.key} image={image.imagem} />
                })
              }
            </div>
          </div>
          <NavLink className="gallery-container-button" to="/">{Languages[language].gallery.button}</NavLink>
        </div>
      </div>
      <Backdrop show={modal} clicked={() => { setModalImage(null); setModal(false); }} />
      <Modal show={modal}>
        <div className="gallery-image-container">
          <img className="gallery-image-container-img" alt="" src={modalImage}></img>
        </div>
      </Modal>
    </>
  )
}