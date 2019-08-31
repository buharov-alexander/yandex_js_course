import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TaskTableRow from './TaskTableRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  cell: {
    border: '1px solid black',
    padding: '5px',
  },
  grey: {
    backgroundColor: '#f5f5f5',
  },
}));

// eslint-disable-next-line no-confusing-arrow
const colorClass = (classes, index) => index % 2 === 0 ? classes.grey : null;

const TaskTable = ({ users, weeks }) => {
  const classes = useStyles();
  const tasks = weeks.reduce((acc, week) => {
    const weekTasks = week.tasks.map(task => ({ name: task, weekIndex: week.index }));
    return acc.concat(weekTasks);
  }, new List());

  const userResults = users.keySeq().toList().map((username) => {
    const completedTasks = users.get(username) || new List();
    const results = tasks.map(task => ({ taskName: task.name, weekIndex: task.weekIndex, result: completedTasks.find(ct => ct.name === task.name) }));
    return { username, results };
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell} colSpan={2} />
            {weeks.map(week => (
              <TableCell className={`${classes.cell} ${colorClass(classes, week.index)}`} key={week.name} colSpan={week.tasks.length} align="center">
                {week.name}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className={classes.cell}>Name</TableCell>
            <TableCell className={classes.cell}>Sum</TableCell>
            {tasks.map(task => (
              <TableCell className={`${classes.cell} ${colorClass(classes, task.weekIndex)}`} key={task.name} align="center">
                {task.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {userResults.map(({ username, results }) => (
            <TaskTableRow
              key={username}
              username={username}
              results={results}
              weekStyle={index => colorClass(classes, index)}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

TaskTable.propTypes = {
  users: ImmutablePropTypes.map.isRequired,
  weeks: ImmutablePropTypes.list.isRequired,
};

export default TaskTable;
