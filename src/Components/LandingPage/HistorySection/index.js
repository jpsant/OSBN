import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv';
import HistoryDiv from '../../UI/historyDiv';

export default function HistorySection({ forwardRef }) {

  const [show, setShow] = useState(false);
  const language = useSelector(state => state.languageReducer.language);
  const dispatch = useDispatch();

  function onShow() {
    dispatch(actions.changeSection('history'));
    setShow(true);
  }

  return (
    <>
      <IntersectionVisible onShow={(e) => onShow(e)}>
        <div ref={forwardRef} className="historyContainer">
          <TransitionDiv show={show} bgColor="#449376" title={language === 'portuguese' ? 'Histórico' :
            language === 'english' ? 'History' : language === 'french' ? 'Historique' : ''} />
          <HistoryDiv year="2018" />
          <HistoryDiv year="2017" />
          <HistoryDiv year="2016" />
          <HistoryDiv year="2015" />
          <HistoryDiv year="2014" />
          <HistoryDiv year="2013" />
          <HistoryDiv year="2012" />
        </div>
      </IntersectionVisible>
    </>
  );
}