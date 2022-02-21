import "../App.css";
import Grid from "../components/grid.js";
import { GridMap } from "../components/gridmap.js";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { triggered } from "../atomy.js";
import { useRecoilState } from "recoil";


/* eslint-disable no-unused-expressions */

export default function TwoPlayerNormalNash({librows, libcols, libpayoffMatrix}) {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const [eqresponse, setEqResponse] = useState(null);

  const [highlightedeqs, setHighlightedEqs] = useState(null);

  const trigger = useRecoilState(triggered);

  const axios = require("axios");

  function displayeqs(data) {
    if (data === "Please complete the payoff matrix") {
      return "Please complete the payoff matrix"
    }else if (data !== "Please complete the payoff matrix" && typeof data == String){
      return data
    }else{
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

  function generatePureHighlightedEqs(data){
    if (data != null) {
      var withoutProbsArray = []
      for (let i = 0; i<data.length; i++){
        if (data[i][1].includes("prob")==false){
          withoutProbsArray.push(data[i])
        }
      }
      var withoutMixedArray = []
      for (let i = 0; i<withoutProbsArray.length; i++){
        var countEqInstances = 0
        for (let j = 0; j<withoutProbsArray.length; j++){
          if (withoutProbsArray[i][0] == withoutProbsArray[j][0]){
            countEqInstances += 1
          }
        }
        if (countEqInstances == 2){
          withoutMixedArray.push(withoutProbsArray[i])
        }
      }
      var pureHighlightedEqsArray = []
      for (let i = 0; i<withoutMixedArray.length-1; i+=2){
        pureHighlightedEqsArray.push([withoutMixedArray[i][1].slice(24),withoutMixedArray[i+1][1].slice(24)])
      }
    }
    return pureHighlightedEqsArray;
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
          player: subform_from_string,
          value: values[i].value,
        });
      }else{
        count_to_check_for_full_matrixdict+=1;
      }

    }
    //dictionary values instead of string parsing
    //console.log(matrixdict);

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
          setHighlightedEqs(generatePureHighlightedEqs(modifiedDataArray))
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
    //using size info from game library to auto-resize
    if (librows!=null){
      setRows(librows)
    }
    if (libcols!=null){
      setCols(libcols)
    }
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
    <div className="twoplayernash">
      <div className = "gridStyle">
        <Grid rows={rows} cols={cols} highlightedeqs={highlightedeqs}/>
      </div>
      <br></br>
      <div>
        <div className="interactionStyle">
          <h2>Rows: </h2>
          &nbsp;
          <div className="buttonStyle">
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
        </div>


        <div className="interactionStyle">
          <h2>Cols:</h2>
          &nbsp;
          <div className="buttonStyle">
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
          </div>

        <br></br>

        <div>
          <h2>{displayeqs(eqresponse)}</h2>
        </div>
      </div>
    </div>
  );
}
