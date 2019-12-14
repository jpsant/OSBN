import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import LazyImport from './lazyLoading/lazyImport';
import Helmet from 'react-helmet';

// utilizando esse componente auxiliar para 'lazy load' os containers.

const LandingPage = LazyImport(() => {
  return import('./Components/LandingPage/FullPage/FullPage');
})

const Gallery = LazyImport(() => {
  return import('./Components/Gallery/Gallery');
})


const Login = LazyImport(() => {
  return import('./Components/Admin/Login/Login');
})

const PageManager = LazyImport(() => {
  return import('./Components/Admin/PageManager/PageManager');
})

const DvdSection = LazyImport(() => {
  return import('./Components/LandingPage/DvdSection/DvdSection');
})

class App extends Component {
  render() {
    // SE LIGAR NA SEQUENCIA DAS ROUTES!

    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/gallery" exact component={Gallery} />
        {/* <Route path="/news/:id" exact component={FullPost} /> */}
        <Route path="/login" exact component={Login} />
        <Route path="/dvd" exact component={DvdSection} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.token) {
      routes = (
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/gallery" exact component={Gallery} />
          {/* <Route path="/news/:id" exact component={FullPost} /> */}
          <Route path="/admin/pageManagement" component={PageManager} />
          <Route path="/login" exact component={Login} />
          <Route path="/dvd" exact component={DvdSection} />
          <Redirect to="/" />
        </Switch>
      );
    }


    return (
      <div className="App">
        <Helmet>
          <title>Orquestra Sanfônica Balaio Nordeste</title>
          <meta name="description" content="Website da Orquestra Sanfônica Balaio Nordeste"></meta>
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
        </Helmet>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token !== null
  }
}

export default withRouter(connect(mapStateToProps)(App));
