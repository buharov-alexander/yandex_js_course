import yaml from 'js-yaml';
import users from 'resources/users.yaml';

import {
  LOAD_USERS,
  LOAD_USER_TASKS,
} from './actionTypes';

export const loadTasksForUser = (user, tasks) => (dispatch) => {
  fetch(`users/${user.username}/code-challenges/completed?access_key=m2cqV5zGM8vvxkBvWznq`)
    .then(response => response.json())
    .then((response) => {
      const completedTasks = response.data;
      const results = tasks.map(task => ({ result: completedTasks.find(ct => ct.name === task.name), ...task }));

      dispatch({ type: LOAD_USER_TASKS, payload: { user, tasks: results } });
    });
};

export const loadUsers = dispatch => fetch(users)
  .then(response => response.text())
  .then((response) => {
    const loadedUsers = yaml.safeLoad(response);
    dispatch({ type: LOAD_USERS, payload: loadedUsers });
    return loadedUsers;
  });
