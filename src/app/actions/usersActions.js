import yaml from 'js-yaml';
import users from 'resources/users.yaml';

import {
  LOAD_USERS,
} from './actionTypes';

const loadUsers = () => (dispatch) => {
  fetch(users)
    .then(response => response.text())
    .then(response => dispatch({ type: LOAD_USERS, payload: yaml.safeLoad(response) }));
};

export default loadUsers;
