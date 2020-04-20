import React, { useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import CSSTransition from 'react-transition-group/CSSTransition';
import * as actions from '../../../../store/actions/actioncreators';

import './newsAnimation.css';
import './styles.scss';

import NewsCard from '../../../UI/newsCard/newsCard';
import Spinner from '../../../UI/spinner/spinner';
import Backdrop from '../../../UI/backDrop';
import Modal from '../../../UI/modal/modal';

export default function NewsAdder({ clicked }) {
  const loading = useSelector(state => state.postReducer.loading);
  const success = useSelector(state => state.postReducer.success);
  const dispatch = useDispatch();

  const [brTitle, setBrTitle] = useState('Balaio Nordeste');
  const [brDate, setBrDate] = useState('xx/xx/xxxx');
  const [brContent, setBrContent] = useState('Resumo');
  const [brBody, setBrBody] = useState('');

  const [enTitle, setEnTitle] = useState('Balaio Nordeste');
  const [enDate, setEnDate] = useState('xx/xx/xxxx');
  const [enContent, setEnContent] = useState('Resumo');
  const [enBody, setEnBody] = useState('');

  const [frTitle, setFrTitle] = useState('Balaio Nordeste');
  const [frDate, setFrDate] = useState('xx/xx/xxxx');
  const [frContent, setFrContent] = useState('Resumo');
  const [frBody, setFrBody] = useState('');

  const [showForm, setShowForm] = useState(true);
  const [modal, setModal] = useState(false);
  const [newImage, setNewImage] = useState(null);

  function postHandler(e) {
    e.preventDefault();
    setShowForm(true);

    const brPost = {
      data: brDate,
      titulo: brTitle,
      resumo: brContent,
      noticia: brBody,
      imagem: newImage,
      id: uniqid('br-')
    }

    const enPost = {
      data: enDate,
      titulo: enTitle,
      resumo: enContent,
      noticia: enBody,
      imagem: newImage,
      id: uniqid('en-')
    }

    const frPost = {
      data: frDate,
      titulo: frTitle,
      resumo: frContent,
      noticia: frBody,
      imagem: newImage,
      id: uniqid('fr-')
    }

    if (enBody && frBody !== '') {
      dispatch(actions.startPosting(brPost, enPost, frPost, newImage))
    } else {
      dispatch(actions.singlePost(brPost, newImage));
    }
  }

  return (
    <>
      <div className="newsAdder-buttonsContainer">
        <button className="newsAdder-buttonsContainer-returnButton" onClick={clicked}>Voltar</button>
      </div>
      <div className="newsAdder-container">
        <div className="newsAdder-container__titleContainer">
          <h1>Adicionar nova Notícia</h1>
          <h2>Preencha os campos abaixo com as Informações:</h2>
        </div>
        <div className="newsAdder-container__formContainer">
          <div className="newsAdder-container__formContainer__form1">
            <h1>Português</h1>
            <form className="newsAdder-container__formContainer__form1-form">
              <div className="newsAdder-container__formContainer__form1-form-title">
                <label htmlFor="title">Título</label>
                <input onChange={(e) => setBrTitle(e.target.value)} value={brTitle} type="text" id="title" placeholder="Título da notícia."></input>
              </div>
              <div className="newsAdder-container__formContainer__form1-form-date">
                <label htmlFor="date">Data</label>
                <input onChange={(e) => setBrDate(e.target.value)} value={brDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
              </div>
              <div className="newsAdder-container__formContainer__form1-form-content">
                <label htmlFor="content">Resumo</label>
                <input onChange={(e) => setBrContent(e.target.value)} value={brContent} type="text" id="content" placeholder="Resumo da notícia"></input>
              </div>
              <div className="newsAdder-container__formContainer__form1-form-body">
                <label htmlFor="body">Conteúdo da notícia</label>
                <input onChange={(e) => setBrBody(e.target.value)} type="text" id="body" placeholder="Conteúdo da notícia"></input>
              </div>
              <input onChange={(e) => setNewImage(e.target.files[0])} type="file" id="file" name="file"></input>
            </form>
            <div className="newsAdder-container__formContainer__form1-preview">
              <NewsCard disabled={e => e.preventDefault()} title={brTitle} date={brDate} content={brContent}
                img="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545" />
            </div>
          </div>
          <div className="newsAdder-container__formContainer__form2">
            <h1>Inglês</h1>
            <form className="newsAdder-container__formContainer__form2__form">
              <div className="newsAdder-container__formContainer__form2__form-title">
                <label htmlFor="title">Título</label>
                <input onChange={(e) => setEnTitle(e.target.value)} value={enTitle} type="text" id="title" placeholder="Título da notícia!"></input>
              </div>
              <div className="newsAdder-container__formContainer__form2__form-date">
                <label htmlFor="date">Data</label>
                <input onChange={(e) => setEnDate(e.target.value)} value={enDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
              </div>
              <div className="newsAdder-container__formContainer__form2__form-content">
                <label htmlFor="content">Resumo</label>
                <input onChange={(e) => setEnContent(e.target.value)} value={enContent} type="text" id="content" placeholder="Resumo da notícia"></input>
              </div>
              <div className="newsAdder-container__formContainer__form2__form-body">
                <label htmlFor="body">Conteúdo da notícia</label>
                <input onChange={(e) => setEnBody(e.target.value)} type="text" id="body" placeholder="Conteúdo da notícia"></input>
              </div>
            </form>
            <div className="newsAdder-container__formContainer__form2-preview">
              <NewsCard disabled={e => e.preventDefault()} title={enTitle} date={enDate} content={enContent}
                img="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545" />
            </div>
          </div>
          <div className="newsAdder-container__formContainer__form3">
            <h1>Francês</h1>
            <form className="newsAdder-container__formContainer__form3__form">
              <div className="newsAdder-container__formContainer__form3__form-title">
                <label htmlFor="title">Título</label>
                <input onChange={(e) => setFrTitle(e.target.value)} value={frTitle} type="text" id="title" placeholder="Título da notícia!"></input>
              </div>
              <div className="newsAdder-container__formContainer__form3__form-date">
                <label htmlFor="date">Data</label>
                <input onChange={(e) => setFrDate(e.target.value)} value={frDate} type="text" id="date" placeholder="xx/xx/xxxx"></input>
              </div>
              <div className="newsAdder-container__formContainer__form3__form-content">
                <label htmlFor="content">Resumo</label>
                <input onChange={(e) => setFrContent(e.target.value)} value={frContent} type="text" id="content" placeholder="Resumo da notícia"></input>
              </div>
              <div className="newsAdder-container__formContainer__form3__form-body">
                <label htmlFor="body">Conteúdo da notícia</label>
                <input onChange={(e) => setFrBody(e.target.value)} type="text" id="body" placeholder="Conteúdo da notícia"></input>
              </div>
            </form>
            <div className="newsAdder-container__formContainer__form3-preview">
              <NewsCard disabled={e => e.preventDefault()} title={frTitle} date={frDate} content={frContent}
                img="https://firebasestorage.googleapis.com/v0/b/osbn-a36f9.appspot.com/o/imagens%2Fnoticias%2Flogo6.png?alt=media&token=c267ce49-95c2-4aa6-a971-f66ff4f41545" />
            </div>
          </div>
        </div>
        <div className="newsAdder-container__buttonContainer">
          <button disabled={(brBody !== '' && newImage !== null) || (brBody && enBody && frBody !== '' && newImage !== null) ? false : true} onClick={postHandler} className="newsAdder-container__buttonContainer-button">
            Publicar
          </button>
        </div>
      </div>

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
        onExit={() => { setModal(false); setShowForm(true) }}
        timeout={500}
      >
        <div>
          <Backdrop clicked={clicked} show={success && modal} />
          <Modal show={success && modal}>
            <div className="Modal">
              <h1>Notícia adicionada com sucesso!</h1>
              <h2>Voltar para o menu principal:</h2>
              <button className="Modal-button" onClick={clicked}>
                Voltar
              </button>
            </div>
          </Modal>
        </div>
      </CSSTransition>
    </>
  )
}