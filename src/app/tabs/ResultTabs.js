import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { CHANGE_TAB } from 'app/actions/actionTypes';
import { ALL, WEEK } from './constants';

const ResultTabs = ({ tab, actions }) => (
  <div>
    <AppBar position="static">
      <Tabs value={tab} onChange={actions.changeTab}>
        <Tab value={ALL} label="All Weeks" />
        <Tab value={WEEK} label="Week Details" />
      </Tabs>
    </AppBar>
  </div>
);

ResultTabs.propTypes = {
  tab: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    changeTab: PropTypes.func,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    tab: state.ui.tab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      changeTab: (event, tab) => dispatch({ type: CHANGE_TAB, payload: { tab } }),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultTabs);
