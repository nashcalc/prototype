import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./form.js";

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

export default function SpacingGrid({ rows, cols }) {
  const classes = useStyles();

  var colMap = Array.from(Array(cols).keys());

  var gridContainer = [];
  for (var i = 0; i < rows; i++) {
    gridContainer.push(
      <Grid container className={classes.root} spacing={2} id={i}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {colMap.map((value) => (
              <Grid key={value} id={value} item>
                <Form />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return gridContainer;
}
