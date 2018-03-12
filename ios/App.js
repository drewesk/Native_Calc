import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './Main';

const store = createStore();

export default () => (
  <Provider store={ store }>
    <Main />
  </Provider>
);
