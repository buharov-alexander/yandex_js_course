import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Row from './Row';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  cell: {
    border: '1px solid black',
    padding: '5px',
  },
}));


const TaskTable = ({ users, weeks }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell}>Name</TableCell>
            <TableCell className={classes.cell}>Sum</TableCell>
            {weeks.map(week => (
              <TableCell className={classes.cell} key={week.name} align="center">
                {week.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.entrySeq().toList().map(([username, results]) => (
            <Row
              key={username}
              username={username}
              results={results}
              weeks={weeks}
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
