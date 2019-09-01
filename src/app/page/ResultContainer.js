import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loadData from 'app/actions/dataActions';
import Table from 'app/table/Table';

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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadData: () => dispatch(loadData()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
