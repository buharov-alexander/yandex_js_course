
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from './store/configureStore';
import TaskTablePage from './task-table/TaskTablePage';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <TaskTablePage />
  </Provider>
);

export default App;
