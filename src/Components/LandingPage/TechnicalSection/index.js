import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv';
import Table from '../../UI/table/table';

import Languages from '../../MultiLanguages/language';

export default function TechnicalSection({ forwardRef }) {
  const language = useSelector(state => state.languageReducer.language);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://osbn-a36f9.firebaseio.com/repertorio.json')
      .then(response => {
        setList(response.data);
      });
  }, [])


  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);

  function onShow() {
    dispatch(actions.changeSection('technical'));
    setShow(true);
  }

  return (
    <IntersectionVisible onShow={onShow}>
      <div ref={forwardRef} style={{ backgroundColor: '#2b765a', display: 'grid' }}>
        <TransitionDiv show={show} bgColor="#449376" title={Languages[language].landingPage.technicalSection.transitionDiv} />
        <div className="musicContainer">
          <div className="musicContainer__table">
            <div className="musicContainer__table-music">
              <h2>{Languages[language].landingPage.technicalSection.musicContainer__table__music} <span>&</span></h2>
            </div>
            <div className="musicContainer__table-composer">
              <h2>{Languages[language].landingPage.technicalSection.musicContainer__table__composer}<span>&</span></h2>
            </div>
          </div>
          <div className="musicContainer__content">
            {
              list.map(item => {
                return <Table key={item.id} music={item.musica} composer={item.compositor} />
              })
            }
          </div>
        </div>
      </div>
    </IntersectionVisible>
  )
}