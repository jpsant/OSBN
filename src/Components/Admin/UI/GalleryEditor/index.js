import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import uniqid from 'uniqid';

import * as actions from '../../../../store/actions/actioncreators';

import './styles.scss';
import './galleryAnimations.css';

import ImageContainer from '../components/imageEditorCards';
import Modal from '../../../UI/modal/modal';
import BackDrop from '../../../UI/backDrop';
import Spinner from '../../../UI/spinner/spinner';

export default function GalleryEditor({ clicked }) {
  const success = useSelector(state => state.postReducer.success);
  const loading = useSelector(state => state.postReducer.loading);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://osbn-a36f9.firebaseio.com/galeria.json')
      .then(response => {
        setImages(response.data);
      })
  }, [images]);

  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalImage, setModalImage] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [modalSuccess, setModalSucces] = useState(false);
  const [sucessRemoveImage, setSucessRemoveImage] = useState(false);
  const [imgPosition, setImgPosition] = useState(null);

  function formHandler(e) {
    e.preventDefault();
    setModalForm(!modalForm);
  }

  function imgHandler(imagem, position) {
    setImage(imagem);
    setModalImage(!modalImage);
    setImgPosition(position);
  }

  function removeImage(e) {
    e.preventDefault();
    let position = imgPosition;
    dispatch(actions.removeImage(position));
    setModalImage(false);
    setSucessRemoveImage(true);
  }

  function submitImage(e) {
    e.preventDefault();
    let imagePost = {
      nome: null,
      key: uniqid('img-'),
      imagem: null
    };
    let image = selectedImage;
    dispatch(actions.startAddImage(image, imagePost));
    setModalForm(!modalForm);
  }

  return (
    <>
      <div className="gallery-editor-buttons-div">
        <button className="gallery-editor-buttons-div-return-button" onClick={clicked}>Voltar</button>
        <button className="gallery-editor-buttons-div-add-button" onClick={formHandler}>Adicionar Imagem</button>
      </div>
      <div className="gallery-button-container">
        <div className="gallery-button-container__title-container">
          <h1>Editor da Galeria!</h1>
          <h2>Adicione imagens para a galeria ou Remova alguma imagem:</h2>
        </div>
        <div className="gallery-button-container-contentContainer">
          {
            images.map((item, index) => {
              return <ImageContainer clicked={() => imgHandler(item.imagem, index)} key={item.key} image={item.imagem} />
            })
          }
        </div>
      </div>

      <CSSTransition in={modalImage}
        classNames="news"
        unmountOnExit
        onExit={() => setModalImage(false)}
        timeout={500}
      >
        <div>
          <BackDrop clicked={imgHandler} show={modalImage} />
          <Modal show={modalImage}>
            <div className="modal-container">
              <div className="modal-container__modalImage">
                <img className="modal-container__modalImage-image" alt="" src={image}></img>
              </div>
              <div className="modal-container__modal-buttons">
                <button onClick={removeImage} className="modal-container__modal-buttons-button">Remover Imagem</button>
              </div>
            </div>
          </Modal>
        </div>
      </CSSTransition>

      <CSSTransition in={modalForm}
        classNames="news"
        unmountOnExit
        onExit={() => setModalForm(false)}
        timeout={500}
      >
        <div>
          <BackDrop clicked={() => setModalForm(!modalForm)} show={modalForm} />
          <Modal show={modalForm}>
            <div className="form-modal-container">
              <div className="form-modal-container__titleContainer">
                <h1>Adicionar Nova imagem</h1>
                <h2>Selecione a imagem que você deseja adicionar:</h2>
              </div>
              <div className="form-modal-container__buttonsContainer">
                <div className="form-modal-container__buttonsContainer-selector">
                  <label htmlFor='file'>Selecionar Imagem</label>
                  <input onChange={e => setSelectedImage(e.target.files[0])} type="file" id="file" name="file"></input>
                </div>
                <div className="form-modal-container__buttonsContainer-submit">
                  <button disabled={selectedImage !== null ? false : true} onClick={submitImage} className="form-modal-container__buttonsContainer-submit-button">
                    Enviar!
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </CSSTransition>

      <CSSTransition in={loading}
        classNames="news"
        unmountOnExit
        timeout={500}
        onExit={() => success ? setModalSucces(true) : setModalSucces(false)}
      >
        <div>
          <BackDrop show={loading} clicked={() => setModalForm(false)} />
          <Spinner />
        </div>
      </CSSTransition>

      <CSSTransition in={success && modalSuccess}
        classNames="news"
        unmountOnExit
        onExit={() => setModalSucces(false)}
        timeout={500}
      >
        <div>
          <BackDrop clicked={() => setModalSucces(true)} show={success && modalSuccess} />
          <Modal show={success && modalSuccess}>
            <div className="gallery-editor-modal">
              <h1>{sucessRemoveImage ? 'Imagem Removida com Sucesso!' : 'Imagem Adicionada com Sucesso!'}</h1>
              <h2>Voltar para o menu principal:</h2>
              <button className="gallery-editor-modal-button" onClick={clicked}>Voltar</button>
            </div>
          </Modal>
        </div>
      </CSSTransition>
    </>
  )
}