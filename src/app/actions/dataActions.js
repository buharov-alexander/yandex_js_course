import loadTasks from './tasksActions';
import { loadUsers, loadTasksForUser } from './usersActions';

const loadData = () => (dispatch) => {
  Promise.all([loadTasks(dispatch), loadUsers(dispatch)])
    .then(([{ tasks }, usernames]) => {
      usernames.map(username => dispatch(loadTasksForUser(username, tasks)));
    });
};

export default loadData;
