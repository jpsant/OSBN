import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import * as actions from '../../../store/actions/actioncreators';

import './styles.scss';
import IntersectionVisible from 'react-intersection-visible';
import { Fade } from 'react-reveal';

import TransitionDiv from '../../UI/transitionDiv';
import NewsCard from '../../UI/newsCard/newsCard';

export default function NewsSection({ forwardRef }) {
  const language = useSelector(state => state.languageReducer.language);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://osbn-a36f9.firebaseio.com/noticias/' + language + '.json')
      .then(response => {
        setNews(response.data);
      });
  }, [language])

  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);


  function onShow() {
    dispatch(actions.changeSection('news'));
    setShow(true);
  }

  return (
    <IntersectionVisible onShow={onShow}>
      <div ref={forwardRef} className="newsDiv">
        <TransitionDiv show={show} bgColor="#c76d2b" title={language === 'portuguese' ? 'Notícias' :
          language === 'english' ? 'News' : language === 'french' ? 'Nouvelles' : ''} />
        <Fade>
          <div className="newsDiv__container">
            <div className="newsDiv__container__newsAlert">
              <div className="newsDiv__container__newsAlert-hatContainer">
                <Fade bottom>
                  <h1 className="newsDiv__container__newsAlert-hatContainer-hat">&</h1>
                </Fade>
              </div>
              <div className="newsDiv__container__newsAlert-textContainer">
                <h2 className="newsDiv__container__newsAlert-textContainer-text">
                  {
                    language === 'english' ? 'There is no news avaliable'
                      : language === 'portuguese' ? 'No momento não há notícias disponíveis'
                        : language === 'french' ? 'Il n\'y a actuellement aucune nouvelle disponible'
                          : ' '
                  }
                </h2>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </IntersectionVisible>
  );
}