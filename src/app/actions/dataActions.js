import loadTasks from './tasksActions';
import { loadUsers, loadTasksForUser } from './usersActions';

const loadData = () => (dispatch) => {
  Promise.all([loadTasks(dispatch), loadUsers(dispatch)])
    .then(([{ tasks }, users]) => {
      users.map(user => dispatch(loadTasksForUser(user, tasks)));
    });
};

export default loadData;
