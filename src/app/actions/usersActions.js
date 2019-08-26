import yaml from 'js-yaml';
import users from 'resources/users.yaml';

import {
  LOAD_USERS,
  LOAD_USER_TASKS,
} from './actionTypes';

const loadTasksForUser = (username, dispatch) => {
  fetch(`https://j3300l2mej.execute-api.eu-west-1.amazonaws.com/dev/${username}`)
    .then(response => response.json())
    .then(response => dispatch({ type: LOAD_USER_TASKS, payload: { username, tasks: response.data } }));
};

const loadUsers = () => (dispatch) => {
  fetch(users)
    .then(response => response.text())
    .then((response) => {
      const usernames = yaml.safeLoad(response);
      dispatch({ type: LOAD_USERS, payload: usernames });
      return usernames;
    }).then(usernames => usernames.forEach(username => loadTasksForUser(username, dispatch)));
};

export default loadUsers;
