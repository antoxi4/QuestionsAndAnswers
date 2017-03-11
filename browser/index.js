'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './app';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import DashBoard from './modules/dashboard';

render((
  <Router component={App}>
      <Route exact path="/" component={DashBoard}/>
  </Router>
), document.getElementById('app'));
