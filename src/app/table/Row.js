import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles(() => ({
  cell: {
    padding: '15px',
    textAlign: 'center',
  },
  notStarted: {
    backgroundColor: '#FFFFFF',
  },
  partially: {
    backgroundColor: '#FFF033',
  },
  completed: {
    backgroundColor: '#6EFF33',
  },
}));

const renderResults = (results, week, classes) => {
  const tasks = results.filter(res => res.weekIndex === week.index);
  const completedCount = tasks.filter(task => task.result).size;
  let cellClass = classes.partially;
  let result = `${completedCount}/${tasks.size}`;
  if (completedCount === 0) {
    cellClass = classes.notStarted;
    result = 0;
  } else if (completedCount === tasks.size) {
    cellClass = classes.completed;
    result = completedCount;
  }

  return (
    <TableCell className={`${cellClass} ${classes.cell}`} key={week.name}>
      {`${result}`}
    </TableCell>
  );
};

const Row = ({ username, results, weeks }) => {
  const classes = useStyles();
  const weekResults = results || new List();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {username}
      </TableCell>
      <TableCell component="th" scope="row">
        {`${weekResults.filter(taskRes => taskRes.result).size}/${weekResults.size}`}
      </TableCell>
      {weeks.map(week => renderResults(weekResults, week, classes))}
    </TableRow>
  );
};

Row.propTypes = {
  username: PropTypes.string.isRequired,
  weeks: ImmutablePropTypes.list.isRequired,
  results: ImmutablePropTypes.list,
};

export default Row;
