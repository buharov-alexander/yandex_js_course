import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List, Map } from 'immutable';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import Row from './Row';
import { COLUMN } from './constants';


const styles = {
  root: {
    width: '100%',
    marginTop: '1rem',
    overflowX: 'auto',
  },
  cell: {
    border: '1px solid black',
    padding: '5px',
  },
};

class TaskTable extends PureComponent {
  static propTypes = {
    actions: PropTypes.shape({
      changeSorting: PropTypes.func,
    }).isRequired,
    users: ImmutablePropTypes.map.isRequired,
    weeks: ImmutablePropTypes.list.isRequired,
    direction: PropTypes.string,
    sortBy: PropTypes.string,
    classes: PropTypes.objectOf(PropTypes.string),
  };

  sortLabel = (label, column) => {
    const { sortBy, direction, actions } = this.props;
    return (
      <TableSortLabel
        active={column === sortBy}
        direction={direction}
        onClick={() => actions.changeSorting(column)}
      >
        {label}
      </TableSortLabel>
    );
  }

  getResults = (weeks, users) => users.entrySeq().toList()
    .map(([username, results]) => {
      const allResults = results || new List();
      const weekResults = weeks.reduce(
        (acc, week) => acc.set(week, allResults.filter(res => res.weekIndex === week.index && res.result)),
        new Map(),
      );
      return {
        username,
        isLoading: !results,
        completedCount: allResults.filter(taskRes => taskRes.result).size,
        allCount: allResults.size,
        weekResults,
      };
    });


  render() {
    const { users, weeks, classes } = this.props;

    const results = this.getResults(weeks, users).sortBy(res => res.username);
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>
                {this.sortLabel(COLUMN.NAME, COLUMN.NAME)}
              </TableCell>
              <TableCell className={classes.cell}>
                {this.sortLabel(COLUMN.SUM, COLUMN.SUM)}
              </TableCell>
              {weeks.map(week => (
                <TableCell className={classes.cell} key={week.name} align="center">
                  {this.sortLabel(week.name, week.name)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map(userResult => (
              <Row
                key={userResult.username}
                username={userResult.username}
                results={userResult}
                weeks={weeks}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(TaskTable);
