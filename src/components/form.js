import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.1),
      width: '8ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
      <div class="form-control">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label='' variant="outlined" />
        </form>
      </div>
  );
}
