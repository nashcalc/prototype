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

function handleInput(event) {
  this.setState({
    name: event.target.value
  });
}

export default function SimpleCard() {
  const classes = useStyles();
  
  const nameEl = React.useRef(null);
  const handleSubmit = e => {
    e.preventDefault();
    // alert(myValue);
    // console.log(myValue);
  };

  const handleChange = event => {
    setValue(event.target.value)
  };
  

  const [myValue, setValue] = useState('')

  // console.log(myValue);

  return (
    <div>
      <Card className={classes.root}>
        <CardActions>
          <div class="form-control">
            {/* <form className={classes.root} noValidate autoComplete="off"> */}
            {/* <TextField value={myValue} onChange={(e) => setValue(e.target.value)} id="outlined-basic" label='' InputProps={{ disableUnderline: true }} />  */}
            { <form onSubmit={handleSubmit}>
              <TextField value={myValue} onChange={handleChange} id="outlined-basic" label='' InputProps={{ disableUnderline: true }} />
              {/* <input type="text" ref={nameEl} />
              </label>
              <input type="submit" name="Submit" /> */}
            </form> }
            {/* </form> */}
          </div>
        </CardActions>
      </Card>
      {myValue}
    </div>
  );
}