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
    if (data == "Please complete the payoff matrix") {
      return "Please complete the payoff matrix"
    }else if (data != "Please complete the payoff matrix" && typeof data == String){
      return data
    }else{
      //console.log(JSON.parse(data))
      var display_array_divs = []
      var parsed_data_array = JSON.parse(data)
      if (parsed_data_array != null){
        for (var i = 0; i < parsed_data_array.length; i++){
          display_array_divs.push(<div>{parsed_data_array[i]}</div>)
        }
        return display_array_divs
      }else{
        return "Please complete the payoff matrix"
        }
      }
    }

  function requestCalculatedEqs(){}

  function generateHighlightedEqs(data){
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

  var modifiedDataArray = []

  useEffect(() => {
    var values = document.getElementsByClassName(
      "MuiInputBase-input MuiInput-input"
    );
    //this is where we send post to api instead of console log
    //we've managed to make [trigger] in recoil atom update every time a
    //new character is added or removed in any form

    var matrixdict = [];

    //counter to determine if axios post condition is met
    var count_to_check_for_full_matrixdict = 0;

    for (var i = 0; i < values.length; i++) {
      var id_to_index = values[i].id
      var end_of_row = id_to_index.indexOf("w")
      var beginning_of_col = id_to_index.indexOf("c")
      var end_of_col = id_to_index.indexOf("l")
      var beginning_of_subform = id_to_index.indexOf("s")
      var end_of_subform = id_to_index.indexOf("m")
      var row_from_string = values[i].id.slice(end_of_row+1,beginning_of_col)
      var col_from_string = values[i].id.slice(end_of_col+1,beginning_of_subform)
      var subform_from_string = values[i].id.slice(end_of_subform+1)

      if (values[i].value != null && values[i].value != "") {
        matrixdict.push({
          row: row_from_string,
          col: col_from_string,
          subform: subform_from_string,
          value: values[i].value,
        });
      }else{
        count_to_check_for_full_matrixdict+=1;
      }

    }
    //dictionary values instead of string parsing
    console.log(matrixdict);

    if (count_to_check_for_full_matrixdict === 0){
      axios({
        method: "POST",
        url: "/test",
        data: { matrixdict },
      })
        .then(function (response) {
          //these could be made into a shorter pair of functions

          for (var i = 0; i < response.data.length - 1; i++){
            //console.log(response.data[i])
            modifiedDataArray.push(response.data[i])
        }
          setEqResponse(JSON.stringify(modifiedDataArray))
          //setEqResponse(modifiedDataArray)
          //setEqResponse("Success")
        })
        .catch(function (error) {
          setEqResponse("Please complete the payoff matrix")
        });
    }
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
      Noice
    </div>
  );
}

export default App;
