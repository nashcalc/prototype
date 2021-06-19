import "./App.css";
import Grid from "./components/grid.js";
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { triggered } from "./atomy.js";
import { useRecoilState } from "recoil";
import axios from "axios";

function App() {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const [eqresponse, setEqResponse] = useState(null);

  const trigger = useRecoilState(triggered);

  const axios = require("axios");

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

  if (rows > 1 && cols > 1) {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols - 1)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows - 1)}>-rows</Button>
          <div>{eqresponse}</div>
        </div>
      </div>
    );
  } else if (rows > 1 && cols <= 1) {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols + 0)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows - 1)}>-rows</Button>
        </div>
      </div>
    );
  } else if (rows <= 1 && cols > 1) {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols - 1)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows + 0)}>-rows</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        {/* <Header/> */}
        <Grid rows={rows} cols={cols} />
        <div>
          <Button onClick={() => setCols(cols + 1)}>+Cols</Button>
          <Button onClick={() => setCols(cols + 0)}>-Cols</Button>
          <Button onClick={() => setRows(rows + 1)}>+rows</Button>
          <Button onClick={() => setRows(rows + 0)}>-rows</Button>
        </div>
      </div>
    );
  }
}

export default App;
