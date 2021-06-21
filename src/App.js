import "./App.css";
import Grid from "./components/grid.js";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { triggered } from "./atomy.js";
import { useRecoilState } from "recoil";
import axios from "axios";
import Header2 from "./components/Header2.js";

/* eslint-disable no-unused-expressions */

function App() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const [eqresponse, setEqResponse] = useState(null);

  const trigger = useRecoilState(triggered);

  const axios = require("axios");

  function displayeqs(data) {
    //console.log(data);
    if (data != null) {
      var display_array_prediv = data.split("],");
      var display_array_postdiv = [];
      display_array_prediv.forEach((element) =>
        display_array_postdiv.push(
          <div>
            {element
              .replaceAll("[", "")
              .replaceAll("'", "")
              .replaceAll("]", "")}
          </div>
        )
      );
    }
    return display_array_postdiv;
  }

  useEffect(() => {
    var values = document.getElementsByClassName(
      "MuiInputBase-input MuiInput-input"
    );
    //this is where we send post to api instead of console log
    //we've managed to make [trigger] in recoil atom update every time a
    //new character is added or removed in any form
    var matrixdict = [];
    for (var i in values) {
      if (values[i].id != null && values[i].value != null) {
        matrixdict.push({
          location: values[i].id,
          value: values[i].value,
        });
      }
    }
    //console.log(JSON.stringify(matrixdict));
    axios({
      method: "POST",
      url: "/test",
      data: { matrixdict },
    })
      .then(function (response) {
        setEqResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setEqResponse("Please complete the payoff matrix");
      });
  }, [trigger]);

  const [minusRowsState, setMinusRowsState] = useState(-1);
  const [minusColsState, setMinusColsState] = useState(-1);

  useEffect(() => {
    if (rows > 1 && cols > 1) {
      setMinusRowsState(-1);
      setMinusColsState(-1);
    } else if (rows > 1 && cols <= 1) {
      setMinusColsState(0);
      setMinusRowsState(-1);
    } else if (rows <= 1 && cols > 1) {
      setMinusRowsState(0);
      setMinusColsState(-1);
    } else {
      setMinusRowsState(0);
      setMinusColsState(0);
    }
  }, [rows, cols]);

  console.log(String(minusColsState));
  console.log(String(minusRowsState));
  return (
    <div className="App">
      <div>
        <Header2 />
      </div>
      <Grid rows={rows} cols={cols} />
      <div>
        <div>
          <Button onClick={() => setRows(rows + minusRowsState)}>-rows</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
        </div>
        <div>
          <Button onClick={() => setCols(cols + minusColsState)}>-cols</Button>
          <Button onClick={() => setCols(cols + 1)}>+cols</Button>
        </div>
        <div>{displayeqs(eqresponse)}</div>
      </div>
    </div>
  );
}

export default App;
