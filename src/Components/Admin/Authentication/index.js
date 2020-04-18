import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

let cookie = Cookies.get('acess_token');

function isAuthenticated(token, use) {
  if (use === '/admin/pageManagement') {
    if (token !== false && cookie !== undefined) {
      return <Redirect to={use} />
    }
  } else {
    if (token === false && cookie === undefined) {
      return <Redirect to={use} />
    }
  }
}

export { isAuthenticated };