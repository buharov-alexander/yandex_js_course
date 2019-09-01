
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from 'app/store/configureStore';
import Page from 'app/page/Page';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default App;
