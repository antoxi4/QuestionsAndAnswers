'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './app';
import store from './common/store';
import { Provider } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  IndexRedirect,
  Link
} from 'react-router-dom';

render((
  <Provider store={store}>
    <Router>
      <Route path='/' component={App}/>
    </Router>
  </Provider>
), document.getElementById('app'));
