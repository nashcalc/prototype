import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import red from "@material-ui/core/colors/red";
import { triggered } from "../atomy.js";
import { useRecoilState } from "recoil";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "12ch",
    },
    minWidth: 40,
  },
  title: {
    fontSize: 11,
  },
  pos: {
    marginBottom: 10,
  },
  redCard: {
    backgroundColor: red[300],
  },
}));

export default function SimpleCard({ location, highlighted }) {
  const classes = useStyles();

  console.log(highlighted + location);

  if (highlighted === true) {
    var highlightcolor = "blue";
  } else {
    highlightcolor = "white";
  }

  const [trigger, changeTrigger] = useRecoilState(triggered);

  const handleChange = (event) => {
    setValue(event.target.value);
    changeTrigger(!trigger);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
    changeTrigger(!trigger);
  };

  const [myValue1, setValue] = useState("");
  const [myValue2, setValue2] = useState("");

  return (
    <div>
      <Card className={classes.root}>
        <CardContent style={{ backgroundColor: highlightcolor }}>
          <CardActions>
            <div>(</div>
            <div class="form-control">
              {
                <form>
                  <TextField
                    type="number"
                    className="formvalue"
                    value={myValue1}
                    onChange={handleChange}
                    id={location + "subform1"}
                    label=""
                    InputProps={{ disableUnderline: true }}
                  />
                </form>
              }
            </div>
            ,
            <div class="form-control">
              {
                <form>
                  <TextField
                    type="number"
                    className="formvalue"
                    value={myValue2}
                    onChange={handleChange2}
                    id={location + "subform2"}
                    label=""
                    InputProps={{ disableUnderline: true }}
                  />
                </form>
              }
            </div>
            <div>)</div>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
