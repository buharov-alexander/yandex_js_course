import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loadData from 'app/actions/dataActions';
import Table from 'app/table/Table';
import { CHANGE_SORTING } from 'app/actions/actionTypes';

class ResultContainer extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      loadData: PropTypes.func,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    props.actions.loadData();
  }

  render() {
    return <Table {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users,
    weeks: state.tasks.weeks,
    tasks: state.tasks.tasks,
    tab: state.ui.tab,
    sortBy: state.ui.sortBy,
    direction: state.ui.direction,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadData: () => dispatch(loadData()),
      changeSorting: column => dispatch({ type: CHANGE_SORTING, payload: { column } }),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
