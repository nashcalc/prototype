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
  input: {
    color: "#FFF",
  },
  title: {
    fontSize: 11,
  },
  pos: {
    marginBottom: 10,
  },
}));

export default function SimpleCard({ row, col, highlightedeqs }) {
  const classes = useStyles();

  row = row + 1
  col = col + 1

  var highlighted = false

  if (highlightedeqs != null){
    for (let i=0; i<highlightedeqs.length; i++){
      if (parseInt(highlightedeqs[i][0]) == row && parseInt(highlightedeqs[i][1]) == col){
        highlighted = true
    }
  }
}

  if (highlighted === true) {
    var color = "limegreen";
    var textcolor = "white";
  } else {
    color = "white";
    textcolor = "black";
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
        <CardContent style={{ backgroundColor: color, color: textcolor }}>
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
                    id={"row" + (row + 1) + "col" + (col + 1) + "subform1"}
                    row={row}
                    col={col}
                    label=""
                    InputProps={{ disableUnderline: true, style: { color: textcolor} }}
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
                    id={"row" + (row + 1) + "col" + (col + 1) + "subform2"}
                    row={row}
                    col={col}
                    label=""
                    InputProps={{ disableUnderline: true, style: { color: textcolor} }}
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
