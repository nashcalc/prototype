import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid({rows, cols}){
  const classes = useStyles();

  var colMap = Array.from(Array(cols).keys());

  const colHolder = (
    <Grid container className={classes.root} spacing={2}>
     <Grid item xs={12}>
       <Grid container justify="center">
         {colMap.map((value) => (
           <Grid key={value} item>
             <Form/>
           </Grid>
         ))}
       </Grid>
     </Grid>
    </Grid>
  )

  var gridContainer = []
  for(var i=0;i<rows;i++){
    gridContainer.push(colHolder);
  }
  return (
    gridContainer
  );
}
