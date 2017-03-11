'use strict';

import React from 'react';
import store from './common/store';
import { Provider } from 'react-redux'

const App = ({children}) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default App
