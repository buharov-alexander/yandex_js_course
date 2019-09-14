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
import { COLUMN, DIRECTION } from './constants';


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
    sortBy: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
    .map(([user, results]) => {
      const allResults = results || new List();
      const weekResults = weeks.reduce(
        (acc, week) => acc.set(week, allResults.filter(res => res.weekIndex === week.index && res.result)),
        new Map(),
      );
      return {
        user,
        isLoading: !results,
        completedCount: allResults.filter(taskRes => taskRes.result).size,
        allCount: allResults.size,
        weekResults,
      };
    });

  resultComparator = () => {
    const { sortBy, direction } = this.props;
    const dir = direction === DIRECTION.ASC ? 1 : -1;
    switch (sortBy) {
      case COLUMN.NAME:
        return (a, b) => dir * a.user.displayName.localeCompare(b.user.displayName);
      case COLUMN.SUM:
        return (a, b) => dir * (a.completedCount - b.completedCount);
      default:
        return (a, b) => {
          const aCompleted = a.weekResults.get(sortBy).size;
          const bCompleted = b.weekResults.get(sortBy).size;
          return dir * (aCompleted - bCompleted);
        };
    }
  };

  render() {
    const { users, weeks, classes } = this.props;

    const results = this.getResults(weeks, users).sort(this.resultComparator());
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
                  {this.sortLabel(week.name, week)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map(userResult => (
              <Row
                key={userResult.user.username}
                user={userResult.user}
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
