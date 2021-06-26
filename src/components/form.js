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
}));

export default function SimpleCard({ location, highlighted }) {
  const classes = useStyles();

  //console.log(highlighted + location);

<<<<<<< HEAD
  if (String(highlighted) === String(location)) {
    var color = "limegreen";
    var textcolor = "white";
  } else {
    color = "white";
    textcolor = "black";
=======
  if (highlighted === true) {
    var highlightcolor = "blue";
  } else {
    highlightcolor = "white";
>>>>>>> f33ab2b8600c3fc7cb1e18c4b4cf72406cb1d478
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
<<<<<<< HEAD
        <CardContent style={{ backgroundColor: color, color: textcolor }}>
=======
        <CardContent style={{ backgroundColor: highlightcolor }}>
>>>>>>> f33ab2b8600c3fc7cb1e18c4b4cf72406cb1d478
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
