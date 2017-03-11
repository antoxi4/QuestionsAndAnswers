'use strict';

import React from 'react';
import { render } from 'react-dom';
import App from './app';
import {
  BrowserRouter as Router,
  Route,
  IndexRedirect,
  Link
} from 'react-router-dom';

render((
    <Router>
      <Route exec path='/' component={App}/>
    </Router>
), document.getElementById('app'));
