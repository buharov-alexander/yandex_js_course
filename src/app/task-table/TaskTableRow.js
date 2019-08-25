import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles(() => ({
  cell: {
    padding: '15px',
    textAlign: 'center',
  },
}));

const TaskTableRow = ({ username, results }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {username}
      </TableCell>
      {results.map(task => (
        <TableCell className={classes.cell} key={task.taskName}>
          {task.result ? '+' : null}
        </TableCell>
      ))}
    </TableRow>
  );
};

TaskTableRow.propTypes = {
  username: PropTypes.string.isRequired,
  results: ImmutablePropTypes.list.isRequired,
};

export default TaskTableRow;
