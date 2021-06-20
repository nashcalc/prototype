import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
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

export default function SimpleCard({ location }) {
  const classes = useStyles();

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
        <CardActions>
          <div>(</div>
          <div class="form-control">
            {
              <form>
                <TextField
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
      </Card>
    </div>
  );
}
