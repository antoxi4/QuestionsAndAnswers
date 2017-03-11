'use strict';

import store from './common/store';
import { Provider } from 'react-redux'

const App = ({ children, location }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export {App as default};
