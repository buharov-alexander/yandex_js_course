
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from 'app/store/configureStore';
import TaskTablePage from 'app/task-table/TaskTablePage';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <TaskTablePage />
  </Provider>
);

export default App;
