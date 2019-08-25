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
    padding: '15px',
  },
}));

const TaskTable = ({ users, weeks }) => {
  const classes = useStyles();
  const tasks = weeks.reduce((acc, week) => acc.push(...week.tasks), new List());

  const userResults = users.keySeq().toList().map((username) => {
    const completedTasks = users.get(username) || new List();
    const results = tasks.map(task => ({ taskName: task, result: completedTasks.find(ct => ct.name === task) }));
    return { username, results };
  });

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            {weeks.map(week => (
              <TableCell className={classes.cell} key={week.name} colSpan={week.tasks.length} align="center">
                {week.name}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            {tasks.map(task => (
              <TableCell className={classes.cell} key={task} align="center">
                {task}
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
