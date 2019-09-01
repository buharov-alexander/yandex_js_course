import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import tasksReducer from './tasksReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  ui: uiReducer,
});
