import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained">Summary</Button>
      <Button variant="contained">
        Answers
      </Button>
      <Button variant="contained">
        Questions
      </Button>
      <Button variant="contained">
        Tags
      </Button>
      <Button variant="contained">
        Following
      </Button>
    </div>
  );
}
