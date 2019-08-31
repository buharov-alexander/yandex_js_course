import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import TaskTableContainer from './TaskTableContainer';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(3),
  },
}));

export default function TaskTablePage() {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography className={classes.title} variant="h3" paragraph>
        Yandex JS course 2019
      </Typography>
      <TaskTableContainer />
    </Container>
  );
}
