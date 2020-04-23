import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../../store/actions/actioncreators';

import './styles.scss';
import './cardAnimations.css';

import Modal from '../../../UI/modal/modal';
import Backdrop from '../../../UI/backDrop';
import NewsEditorCard from '../components/newsEditorCards';
import Spinner from '../../../UI/spinner/spinner';

export default function NewsEditor({ clicked, }) {
  const loading = useSelector(state => state.postReducer.loading);
  const success = useSelector(state => state.postReducer.success);
  const dispatch = useDispatch();

  const [brPosts, setBrPosts] = useState([]);
  const [enPosts, setEnPosts] = useState([]);
  const [frPosts, setFrPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://osbn-a36f9.firebaseio.com/noticias.json`)
      .then(response => {
        setBrPosts(response.data.portuguese);
        setEnPosts(response.data.english);
        setFrPosts(response.data.french);
      })
  }, []);

  const [itemLanguage, setItemLanguage] = useState(null);
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [modalItemPosition, setModalItemPosition] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalResume, setModalResume] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [modalDate, setModalDate] = useState(null);
  const [modalId, setModalId] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [newImage, setNewImage] = useState(null);


  function itemHandler(item, position, language) {
    setShowModal(!showModal);
    setModalItemPosition(position);
    setModalTitle(item.titulo);
    setModalResume(item.resumo);
    setModalContent(item.noticia);
    setModalDate(item.data);
    setModalId(item.id);
    setModalImage(item.imagem);
    setItemLanguage(language)
  }

  function submitPost(event) {
    event.preventDefault();
    setShowModal(false)
    let post = {
      titulo: modalTitle,
      data: modalDate,
      resumo: modalResume,
      imagem: modalImage,
      noticia: modalContent,
      id: modalId
    };
    dispatch(actions.initChangePost(post, modalItemPosition, itemLanguage, newImage));
  }

  function removePost(event) {
    event.preventDefault();
    setShowModal(false)
    dispatch(actions.startRemovePost(modalItemPosition, itemLanguage));
  }

  return (
    <>
      <div className="news-editor-button-container">
        <button className="news-editor-button-container-button" onClick={clicked}>Voltar</button>
      </div>
      <div className="news-editor-container">

        <div className="news-editor-container__titleContainer">
          <h1>Editor de Notícias!</h1>
          <h2>Selecione a notícia que você deseja editar:</h2>
        </div>

        <div className="news-editor-container__brPosts">
          <div className="news-editor-container__brPosts-titleContainer">
            <h1 className="news-editor-container__brPosts-titleContainer-title">Português</h1>
          </div>

          <div className="news-editor-container__brPosts-postsContainerBr">
            {
              brPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => itemHandler(item, index, 'portuguese')} key={item.id} image={item.imagem} title={item.titulo} content={item.resumo} />
              })
            }
          </div>
        </div>
        <div className="news-editor-container__enPosts">
          <div className="news-editor-container__enPosts-titleContainer">
            <h1 className="news-editor-container__enPosts-titleContainer-title">Inglês</h1>
          </div>

          <div className="news-editor-container__enPosts-postsContainerEn">
            {
              enPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => itemHandler(item, index, 'english')} key={item.id} image={item.imagem} title={item.titulo} content={item.resumo} />
              })
            }
          </div>
        </div>
        <div className="news-editor-container__frPosts">
          <div className="news-editor-container__frPosts-titleContainer">
            <h1 className="news-editor-container__frPosts-titleContainer-title">Francês</h1>
          </div>

          <div className="news-editor-container__frPosts-postsContainerFr">
            {
              frPosts.map((item, index) => {
                return <NewsEditorCard clicked={() => itemHandler(item, index, 'french')} key={item.id} image={item.imagem} title={item.titulo} content={item.resumo} />
              })
            }
          </div>
        </div>
      </div>

      <CSSTransition in={showModal}
        classNames="news"
        unmountOnExit
        timeout={250}>
        <div>
          <Backdrop clicked={() => { setShowModal(false); setModalItemPosition(null) }} show={showModal} />
          <Modal show={showModal}>
            <div className="editor-modal-container">
              <div className="editor-modal-container__previewContainer">
                <div className="editor-modal-container__previewContainer__titleContainer">
                  <h1 className="editor-modal-container__previewContainer__titleContainer-title">{modalTitle}</h1>
                  <img alt="" className="editor-modal-container__previewContainer__titleContainer-image" src={modalImage}></img>
                  <h4 className="editor-modal-container__previewContainer__titleContainer-date">{modalDate}</h4>
                  <h3 className="editor-modal-container__previewContainer__titleContainer-resume">{modalResume}</h3>
                </div>
                <div className="editor-modal-container__previewContainer__contentContainer">
                  <h3 className="editor-modal-container__previewContainer__contentContainer-content">{modalContent}</h3>
                </div>
              </div>
              <div className="editor-modal-container__editorContainer">
                <form className="editor-modal-container__editorContainer__form">
                  <div className="editor-modal-container__editorContainer__form-title">
                    <label htmlFor="title">Título</label>
                    <input onChange={(e) => setModalTitle(e.target.value)} value={modalTitle} type="text" id="title" placeholder="Título da notícia!"></input>
                    <input onChange={(e) => setNewImage(e.target.files[0])} type="file" id="file" name="file"></input>
                  </div>
                  <div className="editor-modal-container__editorContainer__form-date">
                    <label htmlFor="date">Data</label>
                    <input onChange={(e) => setModalDate(e.target.value)} value={modalDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
                  </div>
                  <div className="editor-modal-container__editorContainer__form-content">
                    <label htmlFor="content">Resumo</label>
                    <input onChange={(e) => setModalResume(e.target.value)} value={modalResume} type="text" id="content" placeholder="Resumo da notícia"></input>
                  </div>
                  <div className="editor-modal-container__editorContainer__form-body">
                    <label htmlFor="body">Conteúdo da notícia</label>
                    <textarea cols="45" rows="12" onChange={(e) => setModalContent(e.target.value)} value={modalContent} type="text" id="body" placeholder="Conteúdo da notícia"></textarea>
                  </div>
                  <div className="editor-modal-container__editorContainer__form__submit">
                    <button className="editor-modal-container__editorContainer__form__submit-button" onClick={submitPost}>Publicar!</button>
                    <button className="editor-modal-container__editorContainer__form__submit-removeButton" onClick={removePost}>Remover</button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </CSSTransition>

      <CSSTransition in={loading}
        classNames="news"
        unmountOnExit
        timeout={500}
        onExit={() => setModal(true)}
      >
        <div>
          <Backdrop show={loading} />
          <Spinner />
        </div>
      </CSSTransition>

      <CSSTransition in={success && modal}
        classNames="news"
        unmountOnExit
        onExit={() => setModal(false)}
        timeout={500}
      >
        <div>
          <Backdrop clicked={clicked} show={success && modal} />
          <Modal show={success && modal}>
            <div className="news-editor-modal">
              <h1>Notícia Modificada com sucesso!</h1>
              <h2>Voltar para o menu principal:</h2>
              <button className="news-editor-modal-button" onClick={clicked}>Voltar</button>
            </div>
          </Modal>
        </div>
      </CSSTransition>
    </>
  )
};