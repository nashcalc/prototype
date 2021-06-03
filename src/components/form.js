import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.1),
      width: '7ch',
    },
    minWidth: 40
  },
  title: {
    fontSize: 12
  },
  pos: {
    marginBottom: 12
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActions>
        <div class="form-control">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label='' InputProps={{ disableUnderline: true }} />
          </form>
        </div>
      </CardActions>
    </Card>
  );
}
