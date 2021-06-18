import "./App.css";
import Grid from "./components/grid.js";
import React from "react";
import Button from "@material-ui/core/Button";

function App() {
  const [rows, setRows] = React.useState(2);
  const [cols, setCols] = React.useState(2);

  const [currentTime, setCurrentTime] = React.useState(0);

  React.useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  for (var j = 0; j < rows; j++){
    for (var k = 0; k < cols; k++){
      for (var l = 1; l < 3; l++){
        var formlog = document.getElementById("row"+j+"col"+k+"subform"+l)
        if (formlog != null){
          console.log(formlog.value)
        }
      }
    }
  }

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
        </div>
        <p>The current time is {currentTime}.</p>
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
