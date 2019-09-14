import { List } from 'immutable';
import yaml from 'js-yaml';
import tasksFile from 'resources/tasks.yaml';

import {
  LOAD_TASKS,
} from './actionTypes';

const parseTasksFile = text => new List(
  yaml.safeLoad(text)
    .map((weekTasks, index) => ({ name: `Week ${index + 1}`, tasks: new List(weekTasks), index })),
);

const getTasksFromWeeks = weeks => weeks.reduce((acc, week) => {
  const weekTasks = week.tasks.map(task => ({ name: task, weekIndex: week.index }));
  return acc.concat(weekTasks);
}, new List());

const loadTasks = dispatch => fetch(tasksFile)
  .then(response => response.text())
  .then((response) => {
    const weeks = parseTasksFile(response);
    const tasks = getTasksFromWeeks(weeks);

    const result = { weeks, tasks };
    dispatch({ type: LOAD_TASKS, payload: result });
    return result;
  });


export default loadTasks;
