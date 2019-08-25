import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loadUsers from 'app/actions/usersActions';
import loadTasks from 'app/actions/tasksActions';
import TaskTable from './TaskTable';

class TaskTableContainer extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      loadUsers: PropTypes.func,
      loadTasks: PropTypes.func,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    props.actions.loadUsers();
    props.actions.loadTasks();
  }

  render() {
    return <TaskTable {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
    weeks: state.tasks.weeks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadUsers: () => dispatch(loadUsers()),
      loadTasks: () => dispatch(loadTasks()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskTableContainer);
