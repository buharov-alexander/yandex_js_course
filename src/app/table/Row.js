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
  notStarted: {
    backgroundColor: '#FFFFFF',
  },
  partially: {
    backgroundColor: '#f7a531',
  },
  completed: {
    backgroundColor: '#8acc47',
  },
}));

const renderResults = (results, week, classes) => {
  const completedWeekCount = results.size;
  const allWeekCount = week.tasks.size;
  let cellClass = classes.partially;
  let result = `${completedWeekCount}/${allWeekCount}`;
  if (completedWeekCount === 0) {
    cellClass = classes.notStarted;
    result = 0;
  } else if (completedWeekCount === allWeekCount) {
    cellClass = classes.completed;
    result = completedWeekCount;
  }

  return (
    <TableCell className={`${cellClass} ${classes.cell}`} key={week.name}>
      {`${result}`}
    </TableCell>
  );
};

const Row = ({ username, results, weeks }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {username}
      </TableCell>
      <TableCell component="th" scope="row">
        {`${results.completedCount}/${results.allCount}`}
      </TableCell>
      {weeks.map(week => renderResults(results.weekResults.get(week), week, classes))}
    </TableRow>
  );
};

Row.propTypes = {
  username: PropTypes.string.isRequired,
  weeks: ImmutablePropTypes.list.isRequired,
  results: PropTypes.shape({
    completedCount: PropTypes.number,
    allCount: PropTypes.number,
    weekResults: ImmutablePropTypes.map,
  }).isRequired,
};

export default Row;
