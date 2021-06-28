import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { UAParser } from 'ua-parser-js';
import "./styles.scss";

import LanguageSelector from "../languageSelector/hooks";
import MobileMenu from "../mobileMenu/mobileMenu";
import MenuBackDrop from "../menuBackDrop/menuBackDrop";

import Languages from '../../MultiLanguages/language';

const system = new UAParser();
class sideMenu extends Component {
  state = {
    show: system.getDevice().type !== 'mobile',
  };

  onCloseHandler = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  sectionChanger = (section) => {
    this.props.clicked(section);
    // this.setState({ show: false });
  };

  render() {
    return (
      <>
        <MenuBackDrop show={this.state.show} clicked={this.onCloseHandler} />
        <MobileMenu
          language={this.props.language}
          buttonClicked={(section) => this.sectionChanger(section)}
          clicked={this.onCloseHandler}
          show={this.state.show}
        />
        <div
          className="subMenu"
          style={{
            transform: this.state.show ? "translateX(100vh)" : "translateX(0)",
            visibility: this.state.show ? "hidden" : "visible",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <div className="subMenu__closeDiv" onClick={this.onCloseHandler}>
            <span className="subMenu__closeDiv-subTooltip">
              {Languages[this.props.language].sideMenu.openMenu}
            </span>
            <img
              className="subMenu__closeDiv-subText"
              alt=""
              src={require("../../../assets/logo2.svg")}
            ></img>
          </div>
          <div className="subMenu-languageContainer">
            <LanguageSelector show={0} />
          </div>
        </div>
        <div
          className="menu"
          style={{
            transform:
              this.props.show && this.state.show
                ? "translateX(0)"
                : "translateX(100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <div className="menu__closeButton">
            {/* <span className="menu__closeButton-tooltipText">
              {Languages[this.props.language].sideMenu.closeMenu}
            </span> */}
            <h2
              // onClick={this.onCloseHandler}
              style={{color: '#c76d2b'}}
              className="menu__closeButton-title"
            >
              &
            </h2>
          </div>
          <div className="menu__historyButton">
            <span className="menu__historyButton-historyTooltip">
              {Languages[this.props.language].sideMenu.historyButton}
            </span>
            <button
              onClick={() => this.sectionChanger(1)}
              className={
                this.props.section === "history"
                  ? "greenButton active"
                  : "greenButton active"
              }
            >
              <img
                alt=""
                className="side-menu-svg"
                src={require("../../../assets/svgs/book.svg")}
              ></img>
            </button>
          </div>
          <div className="menu__galleryButton">
            <span className="menu__galleryButton-galleryTooltip">
              {Languages[this.props.language].sideMenu.galleryButton}
            </span>
            <button
              onClick={() => this.sectionChanger(2)}
              className={
                this.props.section === "gallery"
                  ? "yellowButton active"
                  : "yellowButton active"
              }
            >
              <img
                alt="Gallery button"
                className="side-menu-svg"
                src={require("../../../assets/svgs/portrait.svg")}
              ></img>
            </button>
          </div>
          <div className="menu__scheduleButton">
            <span className="menu__scheduleButton-scheduleTooltip">
              {Languages[this.props.language].sideMenu.scheduleButton}
            </span>
            <button
              onClick={() => this.sectionChanger(3)}
              disabled
              style={{opacity: '0.5 !important'}}
              className={
                this.props.section === "schedule"
                  ? "redButton"
                  : "redButton"
              }
            >
              <img
                alt=""
                className="side-menu-svg"
                src={require("../../../assets/svgs/calendar.svg")}
              ></img>
            </button>
          </div>
          <div className="menu__newsButton">
            <span className="menu__newsButton-newsTooltip">
              {Languages[this.props.language].sideMenu.newsButton}
            </span>
            <button
              onClick={() => this.sectionChanger(4)}
              className={
                this.props.section === "news"
                  ? "brownButton active"
                  : "brownButton active"
              }
            >
              <img
                alt="News button"
                className="side-menu-svg"
                src={require("../../../assets/svgs/news.svg")}
              ></img>
            </button>
          </div>
          <div className="menu__techButton">
            <span className="menu__techButton-techTooltip">
              {Languages[this.props.language].sideMenu.technicalButton}
            </span>
            <button
              onClick={() => this.sectionChanger(5)}
              className={
                this.props.section === "technical"
                  ? "greenButton active"
                  : "greenButton active"
              }
            >
              <img
                alt=""
                className="side-menu-svg"
                src={require("../../../assets/svgs/accordion.svg")}
              ></img>
            </button>
          </div>
          <div className="menu__socialButton">
            <span className="menu__socialButton-socialTooltip">
              {Languages[this.props.language].sideMenu.socialButton}
            </span>
            <button
              onClick={() => this.sectionChanger(6)}
              className={
                this.props.section === "contact"
                  ? "yellowButton active"
                  : "yellowButton active"
              }
            >
              <img
                alt="Social button"
                className="side-menu-svg"
                src={require("../../../assets/svgs/facebook.svg")}
              ></img>
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.languageReducer.language,
    section: state.languageReducer.section,
  };
};

export default connect(mapStateToProps)(sideMenu);
