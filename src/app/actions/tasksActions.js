import yaml from 'js-yaml';
import tasks from 'resources/tasks.yaml';

import {
  LOAD_TASKS,
} from './actionTypes';

const loadTasks = () => (dispatch) => {
  fetch(tasks)
    .then(response => response.text())
    .then(response => dispatch({ type: LOAD_TASKS, payload: yaml.safeLoad(response) }));
};

export default loadTasks;
