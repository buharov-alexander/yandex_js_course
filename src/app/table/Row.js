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
  grey: {
    backgroundColor: '#f5f5f5',
  },
}));

const Row = ({ username, results, weekStyle }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {username}
      </TableCell>
      <TableCell component="th" scope="row">
        {`${results.filter(taskRes => taskRes.result).size}/${results.size}`}
      </TableCell>
      {results.map(taskRes => (
        <TableCell className={`${classes.cell} ${weekStyle(taskRes.weekIndex)}`} key={taskRes.name}>
          {taskRes.result ? '+' : null}
        </TableCell>
      ))}
    </TableRow>
  );
};

Row.propTypes = {
  username: PropTypes.string.isRequired,
  results: ImmutablePropTypes.list.isRequired,
  weekStyle: PropTypes.func.isRequired,
};

export default Row;
