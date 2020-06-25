import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';

import TransitionDiv from '../../UI/transitionDiv';
import ScheduleDiv from '../../UI/scheduleDiv';

import Languages from '../../MultiLanguages/language';

export default function ScheduleSection({ forwardRef }) {

  useEffect(() => {
    axios.get('https://osbn-a36f9.firebaseio.com/agenda.json')
      .then(response => {
        setAgenda(response.data)
      });
  }, [])

  const [show, setShow] = useState(false);
  const [agenda, setAgenda] = useState([]);

  const language = useSelector(state => state.languageReducer.language);
  const dispatch = useDispatch();

  function onShow() {
    dispatch(actions.changeSection('schedule'));
    setShow(true);
  }

  return (
    <IntersectionVisible onShow={onShow}>
      <div ref={forwardRef} className="scheduleContainer">
        <TransitionDiv show={show} bgColor="#d35523" title={Languages[language].landingPage.scheduleSection.transitionDiv} />
        <div className="scheduleContainer__container">
          {
            agenda.map(item => {
              return <ScheduleDiv
                language={language}
                link={item.link}
                key={item.id}
                date={item.data}
                event={item.evento}
                local={item.local}
                maps={item.maps} />
            })
          }
        </div>
      </div>
    </IntersectionVisible>
  );
}