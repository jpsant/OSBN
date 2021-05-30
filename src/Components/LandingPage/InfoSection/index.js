import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./styles.scss";
import YouTube from "react-youtube";
import IntersectionVisible from "react-intersection-visible";
import { Fade } from "react-reveal";

import TransitionDiv from "../../UI/transitionDiv";
import LazyLoad from "react-lazy-load";

import Languages from '../../MultiLanguages/language';

export default function InfoSection() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const [show, setShow] = useState(false);
  const language = useSelector((state) => state.languageReducer.language);

  return (
    <>
      <IntersectionVisible onShow={() => setShow(true)}>
        <div style={{ backgroundColor: "#b05f24" }}>
          <TransitionDiv
            show={show}
            bgColor="#c76d2b"
            title={Languages[language].landingPage.infoSection.transitionDiv}
          />
          <div className="info-container">
            <div className="info-container__text-container">
              <h1>
                {Languages[language].landingPage.infoSection.infoContainer__title1}
              </h1>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text1_1}
              </h2>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text1_2}
              </h2>
              <h1>
                {Languages[language].landingPage.infoSection.infoContainer__title2}
              </h1>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text2_1}
              </h2>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text2_2}
              </h2>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text2_3}
              </h2>
              <h1>
                {Languages[language].landingPage.infoSection.infoContainer__title3}
              </h1>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text3_1}
              </h2>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text3_2}
              </h2>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text3_3}
              </h2>
              <h1>
                {Languages[language].landingPage.infoSection.infoContainer__title4}
              </h1>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text4}
              </h2>
              <h1>
                {Languages[language].landingPage.infoSection.infoContainer__title5}
              </h1>
              <h2>
                {Languages[language].landingPage.infoSection.infoContainer__text5}
              </h2>
            </div>
            <div className="info-container__video-container">
              <Fade bottom>
                <div className="info-container__video-container-video1">
                  <LazyLoad
                    offsetVertical={500}
                    debounce={false}
                    throttle={250}
                  >
                    <YouTube
                      videoId="gcLEq0KySI4"
                      opts={opts}
                      onReady={show}
                      className="info-container__video-container-video1-videoPlayer1"
                    />
                  </LazyLoad>
                </div>
              </Fade>
              <Fade bottom>
                <div className="info-container__video-container-video2">
                  <LazyLoad
                    offsetVertical={500}
                    debounce={false}
                    throttle={250}
                  >
                    <YouTube
                      videoId="Ib7lBJd7Av8"
                      opts={opts}
                      onReady={show}
                      className="info-container__video-container-video2-videoPlayer2"
                    />
                  </LazyLoad>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </IntersectionVisible>
    </>
  );
}