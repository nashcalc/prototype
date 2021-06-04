import React, { useState} from 'react'
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

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = event => {
    setValue(event.target.value)
  };

  const [myValue, setValue] = useState('')

  return (
    <div>
      <Card className={classes.root}>
        <CardActions>
          <div>(</div>
          <div class="form-control">{
            <form onSubmit={handleSubmit}>
              <TextField value={myValue} onChange={handleChange} id="outlined-basic" label='' InputProps={{ disableUnderline: true }} />
            </form> }
          </div>
          <div>,</div>
          <div class="form-control">{
            <form onSubmit={handleSubmit}>
              <TextField value={myValue} onChange={handleChange} id="outlined-basicy" label='' InputProps={{ disableUnderline: true }} />
            </form> }
          </div>
          <div>)</div>
        </CardActions>
      </Card>
      {myValue}
    </div>
  );
}
