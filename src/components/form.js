import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.1),
      width: '20ch',
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

  const handleChange = event => {
    setValue(event.target.value)
  };

  const handleChange2 = event => {
    setValue2(event.target.value)
  };

  const [myValue, setValue] = useState('')
  const [myValue2, setValue2] = useState('')

  return (
    <div>
      <Card className={classes.root}>
        <CardActions>
          <div>(</div>
          <div class="form-control">{
            <form>
              <TextField value={myValue} onChange={handleChange} id="outlined-basic"  label='' InputProps={{ disableUnderline: true }} />
            </form> }
          </div>
          ,
          <div class="form-control">{
            <form>
              <TextField value={myValue2} onChange={handleChange2} id="outlined-basic" label='' InputProps={{ disableUnderline: true }} />
            </form> }
          </div>
          <div>)</div>
        </CardActions>
      </Card>
      {myValue}
      <div>,</div>
      {myValue2}
    </div>
  );
}
