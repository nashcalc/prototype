import "./App.css";
import Grid from "./components/grid.js";
import { GridMap } from "./components/gridmap.js";
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

  const [highlightedeqs, setHighlightedEqs] = useState(null);

  const trigger = useRecoilState(triggered);

  const axios = require("axios");

  function displayeqs(data) {
    if (data !== null) {
      //removing content from api for human readable output
      var firstelemslist = data.split("{");
      var firstelemsstring = firstelemslist[0].toString();

      var display_array_prediv = firstelemsstring.split("],");
      //console.log(display_array_prediv);
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

  function generateHighlightedEqs(data) {
    if (data != null) {
      //removing content from api for human readable output
      var firstelemslist = data.split("{");
      var firstelemsstring = firstelemslist[1].toString();
      //passing formatted output dictionary to useState hook for use
      //in highlighting equilibria
      var highlightedeqtostate = "{" + firstelemsstring;
      highlightedeqtostate = highlightedeqtostate.slice(0, -1);
    }
    return highlightedeqtostate;
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
      url: "https://nash-calc.herokuapp.com/test",
      data: { matrixdict },
    })
      .then(function (response) {
        //these could be made into a shorter pair of functions
        setEqResponse(response.data);
        setHighlightedEqs(generateHighlightedEqs(response.data));
      })
      .catch(function (error) {
        //console.log(error);
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

  return (
    <div className="App">
      <div>
        <Header2 />
      </div>
      <br></br>
      <Grid rows={rows} cols={cols} highlightedeqs={highlightedeqs} />
      <br></br>
      <div>
        <div className="rowStyle">
          <h2>Rows: </h2>
          &nbsp;
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setRows(rows + minusRowsState)}
          >
            -
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setRows(rows + 1)}
          >
            +
          </Button>
        </div>
        <div className="rowStyle">
          <h2>Cols:</h2>
          &nbsp;
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCols(cols + minusColsState)}
          >
            -
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCols(cols + 1)}
          >
            +
          </Button>
        </div>
        <br></br>
        <div>
          <h2>{displayeqs(eqresponse)}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
